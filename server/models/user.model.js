import mongoose from "mongoose";

const { Schema } = mongoose;

const userShcema = new Schema(
  {
    username: {
      type: String,
      required: true,
      uniquie: true,
    },
    email: {
      type: String,
      required: true,
      uniquie: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      require: false,
    },
    country: {
      type: String,
      reuquired: false,
    },
    phone: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userShcema);

export default User;
