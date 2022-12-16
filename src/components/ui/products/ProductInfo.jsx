import React from "react";
import "./Customization.css";
import ProductOptions from "./ProductOptions";
import ProductSizesList from "./ProductSizesList";
import CartContext from "../../../context/CartContext";
import { useContext } from "react";

const ProductInfo = ({ product }) => {
  const cartCtx = useContext(CartContext);

  function addHandler() {
    cartCtx.addItemToCart({
      id: product._id,
      title: product.title,
      price: product.price,
    }, 1);
  }

  return (
    <>
      <div className="product-info d-flex justify-content-evenly align-items-center mb-5">
        <img src={product.image} alt={product.title} />
        <div>
          <h1 className="fw-bold text-light">{product.title}</h1>
          <span className="fw-bold text-light">{product.description}</span>
          <button onClick={addHandler} className="order-now-btn">ADD TO CART</button>
        </div>
      </div>
      {product.product_type !== "Hot Breakfast" &&
        product.product_type !== "Lunch" && (
          <div className="w-100 d-flex justify-content-evenly align-items-start mb-5">
            <div className="part">
              <h2 className="customization-title">Size options</h2>
              <ProductSizesList />
            </div>
            <div className="part">
              <h2 className="customization-title">Customizations</h2>
              <ProductOptions />
            </div>
          </div>
        )}
    </>
  );
};

export default ProductInfo;
