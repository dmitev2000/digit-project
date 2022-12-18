import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "../ui/loader/Loader";
import CardList from "../ui/cards/CardList";

const CardsPage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((res) => {
        setCards(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="nav-back"></div>
      <div className="container py-5 cpage">
        <h1 className="fw-bold" style={{borderBottom: "solid 5px #04aa6d"}}>Gift Cards</h1>
        <h3 className="mt-5 text-muted">Happy birthday cards</h3>
        <CardList cards={cards.filter(card => card.card_type === "Happy Birthday")} />
        <h3 className="mt-5 text-muted">Thank you cards</h3>
        <CardList cards={cards.filter(card => card.card_type === "Thank You")} />
        <h3 className="mt-5 text-muted">Traditional cards</h3>
        <CardList cards={cards.filter(card => card.card_type === "Traditional")} />
        <h3 className="mt-5 text-muted">Christmas cards</h3>
        <CardList cards={cards.filter(card => card.card_type === "Christmas")} />
      </div>
    </>
  );
};

export default CardsPage;
