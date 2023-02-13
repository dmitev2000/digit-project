import React from "react";
import "./Customization.css";
import ProductSize from "./ProductSize";

const ProductSizesList = () => {
  return (
      <div className="product-sizes">
        <ProductSize imgSize={30} name="Tall" val={12} multiplier={1.1} />
        <ProductSize imgSize={35} name="Grande" val={16} multiplier={1.2} />
        <ProductSize imgSize={42} name="Venti" val={24} multiplier={1.3} />
        <ProductSize imgSize={50} name="Trenta" val={30} multiplier={1.4} />
      </div>
  );
};

export default ProductSizesList;
