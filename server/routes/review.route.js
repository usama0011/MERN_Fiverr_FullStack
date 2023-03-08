import express from "express";
import { createReview, getReviews } from "../controller/review.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.get("/:gigId", getReviews);
router.post("/", verifyToken, createReview);
export default router;
