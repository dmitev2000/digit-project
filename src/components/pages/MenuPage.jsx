import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MenuItemList from "../ui/menu/MenuItemList";
import Loader from "../ui/loader/Loader";
import ScrollTopBtn from "../ui/scrollTop/ScrollTopBtn";
import { AuthContext } from "../../context/AuthContext";

const ManuPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="nav-back"></div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="nav-back"></div>
      <div className="container mp manu-container">
        <h1 className="mb-5 cart-title fw-bold">Our menu</h1>
        <div className="shortcuts mb-5">
          <div>
            <a
              style={{ backgroundColor: "#04aa6d", fontWeight: "bold" }}
              href="#drinks"
            >
              Drinks
            </a>
            <a href="#hot_drinks">Hot drinks</a>
            <a href="#hot_teas">Hot teas</a>
            <a href="#hot_coffees">Hot coffees</a>
            <a href="#cold_drinks">Cold drinks</a>
            <a href="#frappuccino">Frappuccino</a>
          </div>
          <div>
            <a
              style={{ backgroundColor: "#04aa6d", fontWeight: "bold" }}
              href="#merchandise"
            >
              Merchandise
            </a>
            <a href="#cold_cups">Cold cups</a>
          </div>
          <div>
            <a
              style={{ backgroundColor: "#04aa6d", fontWeight: "bold" }}
              href="#food"
            >
              Food
            </a>
            <a href="#hot_breakfast">Hot beakfast</a>
            <a href="#lunch">Lunch</a>
          </div>
        </div>

        { authCtx.user &&
          <div className="mb-5">
            <Link className="top-products" to="/top-products">
              Top 3 products
            </Link>
          </div>
        }

        <h3 id="drinks" className="fw-bold">
          Drinks:
        </h3>
        <hr />
        <h5 id="hot_drinks">Hot drinks</h5>
        <hr />
        <MenuItemList
          data={products.filter(
            (element) => element.product_type.toUpperCase() === "HOT DRINKS"
          )}
        />
        <br />
        <hr />
        <h5 id="hot_teas">Hot teas</h5>
        <hr />
        <MenuItemList
          data={products.filter(
            (element) => element.product_type.toUpperCase() === "HOT TEAS"
          )}
        />
        <br />
        <hr />
        <h5 id="hot_coffees">Hot coffees</h5>
        <hr />
        <MenuItemList
          data={products.filter(
            (element) => element.product_type.toUpperCase() === "HOT COFFEES"
          )}
        />
        <br />
        <hr />
        <h5 id="cold_drinks">Cold drinks</h5>
        <hr />
        <MenuItemList
          data={products.filter(
            (element) => element.product_type.toUpperCase() === "COLD DRINKS"
          )}
        />
        <br />
        <hr />
        <h5 id="frappuccino">Frappuccino</h5>
        <hr />
        <MenuItemList
          data={products.filter((element) =>
            element.product_type.toUpperCase().includes("FRAPPUCCINO")
          )}
        />
        <h3 id="merchandise" className="fw-bold">
          Merchandise:
        </h3>
        <hr />
        <h5 id="cold_cups">Cold cups</h5>
        <hr />
        <MenuItemList
          data={products.filter(
            (element) => element.product_type.toUpperCase() === "COLD CUPS"
          )}
        />
        <br />
        <hr />
        <h3 id="food" className="fw-bold">
          Food
        </h3>
        <hr />
        <h5 id="hot_breakfast">Hot Breakfast</h5>
        <hr />
        <MenuItemList
          data={products.filter(
            (element) => element.product_type === "Hot Breakfast"
          )}
        />
        <hr />
        <h5 id="lunch">Lunch</h5>
        <hr />
        <MenuItemList
          data={products.filter((element) => element.product_type === "Lunch")}
        />
      </div>
      <ScrollTopBtn />
    </div>
  );
};

export default ManuPage;
