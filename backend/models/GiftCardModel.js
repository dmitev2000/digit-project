import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  image: { type: String, required: true },
  price: { type: Number, required: true },
  card_type: { type: String, required: true }
}, {
  timestamps: true,
});

const Card = mongoose.model('Card', cardSchema);

export default Card;