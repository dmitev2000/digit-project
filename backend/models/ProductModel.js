import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  product_type: { type: String, required: true }
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;