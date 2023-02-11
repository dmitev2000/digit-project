import React, { useEffect, useState } from "react";
import MenuItemList from "../ui/menu/MenuItemList";
import axios from "axios";
import Loader from "../ui/loader/Loader";
const Drinks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <h1 className="cart-title my-5 fw-bold">Drinks</h1>
        <hr />
        <h3>Hot Teas</h3>
        <hr />
        <MenuItemList
          data={data.filter((element) => element.product_type === "Hot Teas")}
        />
        <hr />
        <h3>Hot Drinks</h3>
        <hr />
        <MenuItemList
          data={data.filter((element) => element.product_type === "Hot Drinks")}
        />
        <hr />
        <h3>Hot Coffees</h3>
        <hr />
        <MenuItemList
          data={data.filter(
            (element) => element.product_type === "Hot Coffees"
          )}
        />
        <hr />
        <h3>Cold Drinks</h3>
        <hr />
        <MenuItemList
          data={data.filter(
            (element) => element.product_type === "Cold Drinks"
          )}
        />
        <hr />
        <h3>Frappuccino</h3>
        <hr />
        <MenuItemList
          data={data.filter((element) =>
            element.product_type.toString().includes("Frappuccino")
          )}
        />
      </div>
    </>
  );
};

export default Drinks;
