import Card from "../models/GiftCardModel.js";

export const getAllCards = async (req, res, next) => {
    try {
        const cards = await Card.find();
        return res.status(200).json(cards);
    } catch (error) {
        next(error);
    }
}

export const addCard = async (req, res, next) => {
    try {
        const newCard = new Card({
            image: req.body.image,
            price: req.body.price,
            card_type: req.body.card_type
          });
          await newCard.save();
          res.status(201).json("Card successfully added.");
    } catch (error) {
        next(error);
    }
}