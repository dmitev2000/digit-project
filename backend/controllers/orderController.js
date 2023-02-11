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
};

export const getAllOrdersForUser = async (req, res, next) => {
  try {
    const orders = await Order.aggregate([{ $sort: { createdAt: -1 } }]);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export const getMostOrderedProduct = async (req, res, next) => {
  try {
    const orders = await Order.aggregate([
      {
        $unwind: "$products",
      },
      {
        $group: {
          _id: "$products.id",
          totalAmount: { $sum: "$products.amount" },
        },
      },
      {
        $sort: { totalAmount: -1 },
      },
      {
        $limit: 3,
      },
    ]);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
