import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
      },
    payment: {},
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "Deliverd", "Cancel"],
    },
    bookingDate: {
      type : Date,
      default: Date.now,
    },
    bookingOn : {
      type : String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);