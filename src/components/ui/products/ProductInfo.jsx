import React from "react";
import "./Customization.css";
import ProductOptions from "./ProductOptions";
import ProductSizesList from "./ProductSizesList";
import CartContext from "../../../context/CartContext";
import { useContext } from "react";
import { ReactNotifications, Store } from "react-notifications-component";
import SizeContext from "../../../context/SizeContext";

const ProductInfo = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const sizeCtx = useContext(SizeContext);

  function addHandler() {
    cartCtx.addItemToCart(
      {
        id: product._id,
        title: product.title,
        price: product.price * sizeCtx.additionalPriceMultiliper,
        size: sizeCtx.sizeName,
      },
      1
    );
    sizeCtx.updateValues("Normal", 1);
    var sizes = document.getElementsByClassName(".size-list-item");
    for (var i = 0; i < sizes.length; i++) {
      if (sizes[i].classList.contains("border-for-size")) {
        sizes[i].classList.remove("border-for-size");
      }
    }
    Store.addNotification({
      title: "Wonderful!",
      message: "Item added to cart successfully!",
      type: "success",
      insert: "top",
      container: "top-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  }

  return (
    <>
      <ReactNotifications />
      <div className="product-info mb-5">
        <img src={product.image} alt={product.title} />
        <div>
          <h1 className="fw-bold text-light">{product.title}</h1>
          <span className="fw-bold text-light">{product.description}</span>
          <button onClick={addHandler} className="order-now-btn">
            ADD TO CART
          </button>
        </div>
      </div>
      {product.product_type !== "Hot Breakfast" &&
        product.product_type !== "Lunch" && (
          <div className="w-100 customization-wrapper mb-5">
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
