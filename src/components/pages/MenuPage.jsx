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

  if(loading) {
    return <h1>Loading, please wait...</h1>
  }

  return (
    <div className="container">
      <MenuItemList data={products} />
    </div>
  );
};

export default ManuPage;
