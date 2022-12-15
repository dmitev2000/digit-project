import React from "react";
import "./Customization.css";
import ProductOptions from "./ProductOptions";
import ProductSizesList from "./ProductSizesList";

const ProductInfo = ({ product }) => {
  return (
    <>
      <div className="product-info d-flex justify-content-evenly align-items-center">
        <img src={product.image} alt={product.title} />
        <div>
          <h1 className="fw-bold text-light">{product.title}</h1>
          <span className="fw-bold text-light">{product.description}</span>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-evenly align-items-center">
        <ProductSizesList />
        <ProductOptions />
      </div>
    </>
  );
};

export default ProductInfo;
