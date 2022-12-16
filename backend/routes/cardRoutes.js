import { getAllCards, addCard } from '../controllers/cardController.js';
import express from 'express';

const router = express.Router();

router.get('/', getAllCards);
router.post('/add', addCard);

export default router;