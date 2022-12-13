import React from "react";
import Product from "./Product";
import './Product.css';

const ProductList = ({ products }) => {
  return <div className="product-list">
    {products.map((product) => {
        return <Product details={product} key={product.id} />
    })}
  </div>;
};

export default ProductList;
