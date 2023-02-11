import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";

const Order = ({ data, index }) => {
  return (
    <tr>
      <td className="fw-bold">{index + 1}</td>
      <td>{data._id}</td>
      <td>
        {data.createdAt.toString().substring(0, 10)}{" "}
        {data.createdAt.toString().substring(11, 19)}
      </td>
      <td>
        <Link to={`/my-orders/order-details/${data._id}`}>
          <lord-icon
            src="https://cdn.lordicon.com/ejxwvtlg.json"
            trigger="hover"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </Link>
      </td>
    </tr>
  );
};

export default Order;
