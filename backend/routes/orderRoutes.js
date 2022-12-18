import express from 'express';
import { createOrder, getOrderById } from '../controllers/orderController.js';
import { verifyToken } from '../utils/verifyToken.js';
import { getAllOrdersForUser } from '../controllers/orderController.js';

const router = express.Router();

router.post('/place-order', verifyToken, createOrder);

router.get('/:id', verifyToken, getOrderById);

router.get('/my-orders/:id', verifyToken, getAllOrdersForUser);

export default router;