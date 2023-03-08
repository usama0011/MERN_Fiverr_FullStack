import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    conversationId: {
      type: String,
      required: true,
    },
    userId: { 
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
