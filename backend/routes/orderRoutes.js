import express from "express";
import { createOrder, getOrderById, getAllOrdersForUser, getMostOrderedProduct } from "../controllers/orderController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/place-order", verifyToken, createOrder);

router.get("/:id", verifyToken, getOrderById);

router.get("/my-orders/:id", verifyToken, getAllOrdersForUser);

router.get("/top/get", verifyToken, getMostOrderedProduct);

export default router;
