import React from "react";
import "./Customization.css";
import ProductSize from "./ProductSize";

const ProductSizesList = () => {
  return (
      <div className="product-sizes d-flex align-items-end">
        <ProductSize imgSize={30} name="Tall" val={12} />
        <ProductSize imgSize={35} name="Grande" val={16} />
        <ProductSize imgSize={42} name="Venti" val={24} />
        <ProductSize imgSize={50} name="Trenta" val={30} />
      </div>
  );
};

export default ProductSizesList;
