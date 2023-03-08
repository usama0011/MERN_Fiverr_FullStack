import express from "express";
import { logIn, LogOut, Register } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/register",Register);
router.post("/login",logIn);
router.post("/logout",LogOut);

export default router;
