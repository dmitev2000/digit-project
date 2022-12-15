import { addProduct, getProduct, getAllProducts } from "../controllers/productController.js";
import express from 'express';
//import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.post('/create', addProduct);

export default router;