import express from "express";
import {
  createConservation,
  getConversations,
  getSingleConversation,
  updatedConservation,
} from "../controller/conversation.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.get("/", verifyToken, getConversations);
router.post("/", verifyToken, createConservation);
router.get("/single/:id", verifyToken, getSingleConversation);
router.put("/:id", verifyToken, updatedConservation);
export default router;
