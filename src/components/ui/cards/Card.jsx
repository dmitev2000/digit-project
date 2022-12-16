import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${data.image})` }}
        className="gift-card"
      ></div>
    </>
  );
};

export default Card;
