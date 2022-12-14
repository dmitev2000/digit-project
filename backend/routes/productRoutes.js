import { addProduct, getProduct, getAllProducts } from "../controllers/productController.js";
import express from 'express';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.post('/create', addProduct);

export default router;