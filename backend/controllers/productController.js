import Product from "../models/ProductModel.js";
import { createError } from "../utils/error.js";

export const getAllProducts = async (req, res, next) => {
  const products = await Product.find();
  return res.status(200).json(products);
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(createError(404, "Product not found."));
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    next(err);
  }
};

export const addProduct = async (req, res, next) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      product_type: req.body.product_type
    });
    await newProduct.save();
    res.status(201).json("The product has been created successfully.");
  } catch (err) {
    next(err);
  }
};
