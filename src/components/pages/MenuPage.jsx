import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItemList from "../ui/menu/MenuItemList";
import Loader from "../ui/loader/Loader";

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
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="nav-back"></div>
      <div className="container mp">
        <h3 className="fw-bold">Drinks:</h3>
        <hr />
        <h5>Hot drinks</h5>
        <hr />
        <MenuItemList
          data={products.filter(
            (element) => element.product_type.toUpperCase() === "HOT DRINKS"
          )}
        />
        <br />
        <hr />
        <h5>Hot teas</h5>
        <hr />
        <MenuItemList
          data={products.filter(
            (element) => element.product_type.toUpperCase() === "HOT TEAS"
          )}
        />
        <br />
        <hr />
        <h5>Hot coffees</h5>
        <hr />
        <MenuItemList
          data={products.filter(
            (element) => element.product_type.toUpperCase() === "HOT COFFEES"
          )}
        />
        <br />
        <hr />
        <h5>Cold drinks</h5>
        <hr />
        <MenuItemList
          data={products.filter(
            (element) => element.product_type.toUpperCase() === "COLD DRINKS"
          )}
        />
        <br />
        <hr />
        <h5>Frappuccino</h5>
        <hr />
        <MenuItemList
          data={products.filter((element) =>
            element.product_type.toUpperCase().includes("FRAPPUCCINO")
          )}
        />
        <h3 className="fw-bold">Merchandise:</h3>
        <hr />
        <h5>Cold cups</h5>
        <hr />
        <MenuItemList
          data={products.filter(
            (element) => element.product_type.toUpperCase() === "COLD CUPS"
          )}
        />
        <br />
        <hr />
      </div>
    </div>  
  );
};

export default ManuPage;
