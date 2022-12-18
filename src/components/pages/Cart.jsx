import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import "../../assets/css/Cart.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const placeOrder = async () => {
    if (authCtx.user === null) {
      setHasError(true);
      setErrorMessage("Please log in first!");
      return;
    }
    const dataToSend = cartCtx.cartItems.map((product) => {
      const { id, amount } = product;
      return { id, amount };
    });
    await axios
      .post(
        "http://localhost:5000/orders/place-order",
        {
          userID: authCtx.user._id,
          totalPrice: cartCtx.totalPrice(),
          products: dataToSend,
        },
        {
          credentials: "include",
          withCredentials: true,
        }
      )
      .then((res) => {
        cartCtx.emptyCart();
        setOrderSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="nav-back"></div>
      <div className="container mt-5 pt-5">
        <h1 className="my-5 cart-title fw-bold">Your cart</h1>
        {orderSuccess && <h1 className="order-success">Order placed successfully.</h1>}
        {cartCtx.totalItems === 0 ? (
          <>
            <h3 className="text-muted my-5">Your cart is empty!</h3>
          </>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Remove item</th>
                </tr>
              </thead>
              <tbody>
                {cartCtx.cartItems.map((element, index) => {
                  return (
                    <tr key={element.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{element.title}</td>
                      <td>{element.amount}</td>
                      <td>${element.price}</td>
                      <td>${element.price * element.amount}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            cartCtx.removeItemFromCart(element.id);
                          }}
                        >
                          Remove item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="text-end">
                  <th colSpan={6}>
                    Total: <b>${cartCtx.totalPrice()}</b>
                  </th>
                </tr>
              </tfoot>
            </table>
            <button onClick={placeOrder} className="mt-5 mb-4 order">
              Order now
            </button>
            {hasError && (
              <div className="order-error">
                {errorMessage} <Link to="/login">Log in</Link> or{" "}
                <Link to="/register">Register</Link>.
              </div>
            )}
          </>
        )}
      </div>
      ;
    </>
  );
};

export default Cart;
