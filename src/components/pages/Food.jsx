import React, { useState, useEffect } from "react";
import MenuItemList from "../ui/menu/MenuItemList";
import axios from "axios";
import Loader from "../ui/loader/Loader";

const Food = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setData(res.data);
      setLoading(false);
    });
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
      <div className="my-5 py-5 container">
        <h1 className="cart-title my-5 fw-bold">Food</h1>
        <hr />
        <h3>Hot Breakfast</h3>
        <hr />
        <MenuItemList data={data.filter((element) => element.product_type === "Hot Breakfast")} />
        <hr />
        <h3>Lunch</h3>
        <hr />
        <MenuItemList data={data.filter((element) => element.product_type === "Lunch")} />
      </div>
    </>
  );
};

export default Food;
