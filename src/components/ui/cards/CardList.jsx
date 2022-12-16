import React from "react";
import Card from "./Card";
import "./Card.css";

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.length === 0 ? (
        <h4 className="fw-bold">No cards available for this category.</h4>
      ) : (
        cards.map((card) => {
          return <Card data={card} key={card._id} />;
        })
      )}
    </div>
  );
};

export default CardList;
