import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";

const Order = ({ data }) => {
  return (
    <div className="py-5">
      <Link className="order-comp" to={`/my-orders/order-details/${data._id}`}>
        OrderID: {data._id}
      </Link>
    </div>
  );
};

export default Order;
