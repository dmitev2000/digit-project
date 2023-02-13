import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  totalItems: 0,
  allItems: 0,
  totalPrice: () => {},
  totalQuantity: () => {},
  addItemToCart: (item) => {},
  removeItemFromCart: (itemId) => {},
  isItemInCart: (itemId) => {},
  emptyCart: () => {},
});

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [allItems, setAllItems] = useState(0);

  function addItemToCartHandler(item, amount) {
    setAllItems((items) => items + 1);
    if (isItemInCartHandler(item.id, item.size)) {
      let product = cartItems.find((i) => i.id === item.id);
      product.amount += amount;
    } else {
      item.amount = amount;
      setCartItems((prev) => {
        return prev.concat(item);
      });
    }
  }

  function totalQuantity() {
    return cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );
  }

  function removeItemFromCartHandler(itemId) {
    setAllItems(
      (val) => val - cartItems.find((item) => item.id === itemId).amount
    );
    setCartItems((prev) => {
      return prev.filter((item) => item.id !== itemId);
    });
  }

  function totalPriceHandler() {
    let total = 0;
    cartItems.forEach((item) => {
      if (item.amount) {
        total += item.price * item.amount;
      } else {
        total += item.price;
      }
    });
    return total;
  }

  function isItemInCartHandler(itemId, itemSize) {
    return cartItems.some((item) => item.id === itemId && item.size === itemSize);
  }

  function emptyCartHandler() {
    setCartItems(() => []);
    setAllItems(() => 0);
  }

  const context = {
    cartItems: cartItems,
    totalItems: cartItems.length,
    totalPrice: totalPriceHandler,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
    isItemInCart: isItemInCartHandler,
    emptyCart: emptyCartHandler,
    totalQuantity: totalQuantity,
    allItems: allItems,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
