import Conversation from "../models/conversation.model.js";
import { createError } from "../utils/createError.js";

export const getConversations = async (req, res, next) => {
  try {
    const getAllConservations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    );
    res.status(200).send(getAllConservations);
  } catch (error) {
    next(error);
  }
};
export const createConservation = async (req, res, next) => {
  try {
    const newConversation = new Conversation({
      id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
      sellerId: req.isSeller ? req.userId : req.body.to,
      buyerId: req.isSeller ? req.body.to : req.userId,
      readBySeller: req.isSeller,
      readByBuyer: !req.isSeller,
    });
    const savedConservation = await newConversation.save();
    res.status(201).send(savedConservation);
  } catch (error) {
    next(error);
  }
};
export const getSingleConversation = async (req, res, next) => {
  try {
    const singleConservation = await Conversation.findOne({
      id: req.params.id,
    });
    res.status(200).json(singleConservation);
    if (!singleConservation)
      return next(createError(404, "No Coversation Found!!"));
  } catch (error) {
    next(error);
  }
};
export const updatedConservation = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedConservation = await Conversation.findOneAndUpdate(
      {
        id: req.params.id,
      },
      {
        $set: {
          ...(req.isSeller ? { readyBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );
    res.status(200).send(updatedConservation);
  } catch (error) {
    next(error);
  }
};
