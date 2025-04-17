import mongoose from "mongoose";

const bankSchema = new mongoose.Schema(
  {
    balance: {
        type: Number,
      }
  },
  { timestamps: true }
);

export default mongoose.model("Bank", bankSchema);