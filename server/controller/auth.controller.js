import User from "../models/user.model.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const Register = async (req, res, next) => {
  try {
    const hashPassword = bcrypt.hashSync(req.body.password, 5);
    const createuser = await User.create({
      ...req.body,
      password: hashPassword,
    });
    res.status(201).json(createuser);
  } catch (error) {
    next(error);
  }
};
export const logIn = async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) return next(createError(404, "User Not Found!"));
    const isCorrectPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isCorrectPassword) return next(createError(400, "Wrong Password"));
    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_SECRET
    );
    const { password, ...others } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const LogOut = (req, res, next) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logout.");
};
