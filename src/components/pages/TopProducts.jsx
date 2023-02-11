import React, { useState, useEffect } from "react";
import Loader from "../ui/loader/Loader";
import axios from "axios";
import MenuItem from "../ui/menu/MenuItem";

const TopProducts = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/orders/top/get/", {
        credentials: "include",
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data);
        for (var i in res.data) {
          axios
            .get(`http://localhost:5000/products/${res.data[i]._id}`)
            .then((prod) => setProducts((prev) => prev.concat(prod.data)))
            .catch((err) => console.log(err.message));
        }
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err.message));
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="nav-back"></div>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="nav-back"></div>
      <div className="container mp">
        <h1 className="mb-5 cart-title fw-bold">Most ordered products</h1>
        <div className="container top-products">
          <div className="silver">
            <h3 className="mb-3">Ordered: {orders[1].totalAmount} times</h3>
            {products[1] && <MenuItem item={products[1]} />}
          </div>
          <div className="gold">
            <h3 className="mb-3">Ordered: {orders[0].totalAmount} times</h3>
            {products[0] && <MenuItem item={products[0]} />}
          </div>
          <div className="bronze">
            <h3 className="mb-3">Ordered: {orders[2].totalAmount} times</h3>
            {products[2] && <MenuItem item={products[2]} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProducts;
