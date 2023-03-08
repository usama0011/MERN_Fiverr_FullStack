import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import reviewRouter from "./routes/review.route.js";
import orderRouter from "./routes/order.route.js";
import messageRouter from "./routes/message.route.js";
import gigRouter from "./routes/gig.route.js";
import conversationRouter from "./routes/conversation.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import cors middleware

dotenv.config();
const app = express();
mongoose.set("strictQuery", true);
const MONGOOSE_URL = process.env.MONGOOSE_URL;

const ConnectDataBase = async () => {
  try {
    await mongoose.connect(MONGOOSE_URL).then(() => {
      console.log("Db Connection is Successully");
    });
  } catch (error) {
    console.log(error);
  }
};

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
); // Enable CORS middleware
app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/gigs", gigRouter);
app.use("/api/orders", orderRouter);
app.use("/api/conversations", conversationRouter);
app.use("/api/messages", messageRouter);
app.use("/api/auth", authRouter);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong";
  return res.status(errorStatus).send(errorMessage);
});

app.listen(5000, () => {
  ConnectDataBase();
  console.log("Server is running successfully");
});
