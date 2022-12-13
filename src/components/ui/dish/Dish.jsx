import React from "react";

const Dish = ({ img, text }) => {
  return (
    <div className="offer d-flex justify-content-center align-items-center">
      <img
        src={img}
        alt={text}
      />
      <h3 className="text-muted">{text}</h3>
    </div>
  );
};

export default Dish;
