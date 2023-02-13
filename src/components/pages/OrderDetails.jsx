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

  const removeDuplicates = (products) => {
    const newList = [];
    for (var i = 0; i < products.length; i++) {
      var flag = false;
      for (var j = 0; j < newList.length; j++) {
        if (newList[j]._id === products[i]._id) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        newList.push(products[i]);
      }
    }
    return newList;
  };

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
        <h3 className="fw-bold">List of ordered products:</h3>
        {order.products.map((p, i) => {
          let pSize = "Normal";
          if (p.size !== undefined) {
            pSize = p.size;
          }
          return (
            <h4 className="text-muted" key={i}>
              * {products[i] && products[i].title}{" "}
              <span className="fw-bold">x{p.amount}</span> (size: {pSize})
            </h4>
          );
        })}
        <MenuItemList data={removeDuplicates(products)} />
      </div>
    </>
  );
};

export default OrderDetails;
