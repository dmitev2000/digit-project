import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <div className="nav-back"></div>
      <div className="container my-5 py-5">
        <h1 className="my-5">Your cart</h1>
        {cartCtx.totalItems === 0 ? (
          <>
            <h3>Your cart is empty</h3>
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
                      <td>{element.price}</td>
                      <td>{element.price * element.amount}</td>
                      <td>
                        <button
                          className="mx-2 btn btn-danger"
                          onClick={() => {cartCtx.removeItemFromCart(element.id)}}
                        >
                          Remove item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
      ;
    </>
  );
};

export default Cart;
