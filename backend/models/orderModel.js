import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", schema);
