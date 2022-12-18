/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Loader from "../ui/loader/Loader";
import { AuthContext } from "../../context/AuthContext";
import OrderList from "../ui/orders/OrderList";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/my-orders/${authCtx.user.id}`, {
        credentials: "include",
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data.filter(order => order.userID === authCtx.user._id));
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
      <div className="container mt-5 py-5">
        <h1 className="my-5 cart-title fw-bold">My Orders</h1>
        {orders.length === 0 ? (
          <h3 className="text-muted my-5">You dont have any orders yet.</h3>
        ) : (
          <OrderList orders={orders} />
        )}
      </div>
    </>
  );
};

export default MyOrders;
