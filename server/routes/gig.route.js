import express from "express";
import { createGig, deleteGig, getGig, getGigs } from "../controller/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.get("/", verifyToken, getGigs);
router.get("/single/:id", verifyToken,getGig );
router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
export default router;
