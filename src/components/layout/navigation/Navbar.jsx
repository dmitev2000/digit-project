import logo from "../../../assets/img/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { AuthContext } from "../../../context/AuthContext";
import CartContext from "../../../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const { user, dispatch } = useContext(AuthContext);
  const { pathname } = useLocation();

  function onChangeHandler() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/");
  };

  window.onscroll = function () {
    if (isOpen) {
      return;
    }
    let links = document.querySelectorAll(".nav-link-v1");
    let dropbtns = document.querySelectorAll(".dropbtn");
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.querySelector("nav").style.backgroundColor = "white";
      document.querySelector("nav").style.borderBottom = "solid 5px #04AA6D";
      document.getElementsByClassName("show-menu-btn")[0].style.color =
        "#04AA6D";

      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "black";
      }
      for (let i = 0; i < dropbtns.length; i++) {
        dropbtns[i].style.color = "black";
      }
    } else {
      document.querySelector("nav").style.backgroundColor = "transparent";
      document.querySelector("nav").style.borderBottom = "none";
      document.getElementsByClassName("show-menu-btn")[0].style.color = "white";
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "white";
      }
      for (let i = 0; i < dropbtns.length; i++) {
        dropbtns[i].style.color = "white";
      }
    }
  };

  return (
    <nav className="px-5">
      <div className="d-flex justify-content-center align-items-center">
        <Link to="/">
          <img src={logo} className="starbucks-logo" alt="starbucks logo" />
        </Link>
      </div>
      <label htmlFor="nav-toggle-btn" className="show-menu-btn">
        <i className="bi bi-grid"></i>
      </label>
      <input
        type="checkbox"
        id="nav-toggle-btn"
        checked={isOpen}
        onChange={onChangeHandler}
      />
      <div className="nav-links-section">
        <ul>
          <li>
            <Link to="/" className="nav-link-v1">
              HOME
            </Link>
          </li>
          <li>
            <Dropdown
              path="/menu"
              name="menu"
              elements={[
                ["Drinks", "/drinks"],
                ["Food", "/food"],
                ["Merchandise", "/merchandise"],
              ]}
            />
          </li>
          <li>
            <Link className="nav-link-v1" to="/gift-cards">
              GIFT CARDS
            </Link>
          </li>
          <li>
            <Link className="nav-link-v1" to="/cart">
              CART ({cartCtx.allItems})
            </Link>
          </li>
          {user && (
            <li>
              <Link className="nav-link-v1" to="/my-orders">
                MY ORDERS
              </Link>
            </li>
          )}
          {!user ? (
            <>
              <li>
                <Link to="/login" className="nav-link-v1">
                  SIGN IN
                </Link>
              </li>
              <li>
                <Link to="/register" className="nav-link-v1">
                  SIGN UP
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <span className="nav-link-v1 welcome">
                  Welcome, {user.username}
                </span>
              </li>
              <li>
                <button className="btn btn-danger" onClick={handleLogout}>
                  <i className="mx-1 bi bi-box-arrow-right"></i>
                </button>
              </li>
            </>
          )}
          <label
            htmlFor="nav-toggle-btn"
            onClick={() => window.scrollTo(0, 0)}
            className="hide-menu-btn"
          >
            <i className="bi bi-x"></i>
          </label>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
