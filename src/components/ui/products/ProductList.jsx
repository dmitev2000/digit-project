import React from "react";
import ProductComponent from "./ProductComponent";
import './ProductComponent.css';

const ProductList = ({ products }) => {
  return <div className="product-list">
    {products.map((product) => {
        return <ProductComponent details={product} key={product.id} />
    })}
  </div>;
};

export default ProductList;
