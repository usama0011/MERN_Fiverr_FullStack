import Gig from "../models/gig.model.js";
import Order from "../models/order.model.js";
import Stripe from "stripe";
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export const makePayment = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_KEY);
  const gig = await Gig.findById(req.params.id);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  const newOrder = new Order({
    gigId: gig._id,
    img: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    desc: gig.desc,
    payment_intent: paymentIntent.id,
  });
  await newOrder.save();
  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};
export const updateOrder = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );
    res.status(200).send("Order has been comformed!!");
  } catch (error) {
    next(error);
  }
};
