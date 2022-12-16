import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";

const CartItem = ({ item }) => {
  const CartCtx = useContext(CartContext);
  function removeHandler() {
    CartCtx.removeItemFromCart(item.id);
  }
  return (
    <div className="w-100 d-flex justify-content-start">
      <h3 className="mx-2">{item.title}</h3>
      <h3 className="mx-2">{item.amount}</h3>
      <h3 className="mx-2">{item.price * item.amount}</h3>
      <button className="mx-2 btn btn-danger" onClick={removeHandler}>Remove item</button>
    </div>
  );
};

export default CartItem;
