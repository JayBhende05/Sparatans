import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    product: {
        type: Object,
      },
    payment: {},
    buyer: {
      type: Object,
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

export default mongoose.model("Booking", bookingSchema);