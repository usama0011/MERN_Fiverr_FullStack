import express from "express";
import {
  getOrders,
  makePayment,
  updateOrder,
} from "../controller/order.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", verifyToken, getOrders);
// router.post("/:id", verifyToken, createOrder);
router.post("/create-payment-intent/:id", verifyToken, makePayment);
router.put("/", verifyToken, updateOrder);

export default router;
