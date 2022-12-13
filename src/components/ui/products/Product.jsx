import React from "react";
import './Product.css';

const Product = ({ details }) => {
  return (
    <div className="product">
      <img src={details.img} alt={details.title} />
      <p className="product-title">{details.title}</p>
    </div>
  );
};

export default Product;
