import Gig from "../models/gig.model.js";
import Review from "../models/review.model.js";
import { createError } from "../utils/createError.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller) {
    return next(createError(403, "Seller's cant's create review"));
  }
  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });
  try {
    const alreadyReview = await Review.findOne({
      userId: req.userId,
      gigId: req.body.gigId,
    });
    if (alreadyReview)
      return next(
        createError(403, "You can already created review for that gig")
      );
    const saveReview = await newReview.save();
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).json(saveReview);
  } catch (error) {}
};

export const getReviews = async (req, res, next) => {
  try {
    const getReviews = await Review.find({
      gigId: req.body.gigId,
    });
    res.status(200).json(getReviews);
  } catch (error) {
    next(error);
  }
};
