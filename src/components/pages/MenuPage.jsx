import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItemList from "../ui/menu/MenuItemList";

const ManuPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      //console.log(res.data);
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading, please wait...</h1>;
  }

  return (
    <div className="container py-5 my-5">
      <h3 className="fw-bold">Drinks:</h3>
      <hr />
      <h5>Hot drinks</h5>
      <hr />
      <MenuItemList data={products.filter((element) => element.product_type.toUpperCase() === "HOT DRINKS")} />
      <br />
      <hr />
      <h5>Hot teas</h5>
      <hr />
      <MenuItemList data={products.filter((element) => element.product_type.toUpperCase() === "HOT TEAS")} />
      <br />
      <hr />
      <h5>Hot coffees</h5>
      <hr />
      <MenuItemList data={products.filter((element) => element.product_type.toUpperCase() === "HOT COFFEES")} />
      <br />
      <hr />
      <h5>Cold drinks</h5>
      <hr />
      <MenuItemList data={products.filter((element) => element.product_type.toUpperCase() === "COLD DRINKS")} />
      <br />
      <hr />
      <h5>Frappuccino</h5>
      <hr />
      <MenuItemList data={products.filter((element) => element.product_type.toUpperCase().includes("FRAPPUCCINO"))} />
    </div>
  );
};

export default ManuPage;
