/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../ui/loader/Loader";
import { useParams } from "react-router-dom";
import MenuItemList from "../ui/menu/MenuItemList";

const OrderDetails = () => {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/${id}/`, {
        credentials: "include",
        withCredentials: true,
      })
      .then((res) => {
        setOrder(res.data);
        for (let i = 0; i < res.data.products.length; i++) {
          axios
            .get(`http://localhost:5000/products/${res.data.products[i].id}`)
            .then((r) => {
              setProducts((prev) => prev.concat(r.data));
            })
            .catch((err) => console.log(err));
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="nav-back"></div>
      <div className="container py-5">
        <h1 className="fw-bold cart-title mt-5 pt-5">
          Ordered on: {order.createdAt.substring(0, 19).replace("T", " ")}
        </h1>
        <br />
        <h3 className="fw-bold">Price: ${order.totalPrice}</h3>
        <br />
        <h3 className="fw-bold">Ordered products:</h3>
        {order.products.map((p, i) => {
          return (
            <h4 className="text-muted" key={i}>
              {products[i] && products[i].title} x{p.amount}
            </h4>
          );
        })}
        <MenuItemList data={products} />
      </div>
    </>
  );
};

export default OrderDetails;
