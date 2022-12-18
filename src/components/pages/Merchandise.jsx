import React, {useState, useEffect} from "react";
import axios from "axios";
import Loader from "../ui/loader/Loader";
import MenuItemList from "../ui/menu/MenuItemList";

const Merchandise = () => {
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
        <h1 className="cart-title my-5 fw-bold">Merchandise</h1>
        <hr />
        <h3>Cold cups</h3>
        <hr />
        <MenuItemList data={data.filter((element) => element.product_type === "Cold Cups")} />
      </div>
    </>
  );
};

export default Merchandise;
