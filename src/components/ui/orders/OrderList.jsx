import React from "react";
import "./Orders.css";
import Order from "./Order";

const OrderList = ({ orders }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      <table className="table table-striped table-hover">
        <thead>
          <tr className="table-success">
            <th>#</th>
            <th>OrderID</th>
            <th>Datetime</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            return <Order key={order._id} data={order} index={index} />;
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default OrderList;
