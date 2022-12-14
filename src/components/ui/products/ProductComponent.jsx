import React from "react";
import './ProductComponent.css';

const ProductComponent = ({ details }) => {
  return (
    <div className="product">
      <img src={details.img} alt={details.title} />
      <p className="product-title">{details.title}</p>
    </div>
  );
};

export default ProductComponent;
