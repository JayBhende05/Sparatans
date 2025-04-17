import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    destinationName: {
      type: String,
      required: true,
    },
    activity: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        default: 1
      },
      price: {
        type: Number,
        required: true,
      },
      rating: {
        type: Number,
        default: 4.2,
      },
      description: {
        type: String,
        required: true,
      },
      activities: {
        type: String,
        default: "5+",
      },
    slug: {
      type: String,
      required: true,
    },
  
    image: {
      data: Buffer,
      contentType: String,
    },
    image1: {
      data: Buffer,
      contentType: String,
    },
    image2: {
      data: Buffer,
      contentType: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Package", packageSchema);

// { }