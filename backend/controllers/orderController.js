import Order from "../models/orderModel.js";

export const createOrder = async (req, res, next) => {
  try {
    const newOrder = new Order({
      userID: req.body.userID,
      products: req.body.products,
      totalPrice: req.body.totalPrice,
    });
    await newOrder.save();
    res.status(201).json("Order successfully placed.");
  } catch (err) {
    next(err);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
}

export const getAllOrdersForUser = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
