import { Schema } from "mongoose";
import mongoose from "mongoose";

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  currency: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
