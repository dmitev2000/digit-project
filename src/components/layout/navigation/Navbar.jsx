import logo from "../../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/");
  };

  window.onscroll = function () {
    let links = document.querySelectorAll(".nav-link-v1");
    let dropbtns = document.querySelectorAll(".dropbtn");
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.querySelector("nav").style.backgroundColor = "white";
      document.querySelector("nav").style.borderBottom = "solid 5px #04AA6D";

      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "black";
      }
      for (let i = 0; i < dropbtns.length; i++) {
        dropbtns[i].style.color = "black";
      }
    } else {
      document.querySelector("nav").style.backgroundColor = "transparent";
      document.querySelector("nav").style.borderBottom = "none";
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
        <Link to='/'>
          <img src={logo} className="starbucks-logo" alt="starbucks logo" />
        </Link>
      </div>
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
          <Dropdown
            path="/gift-cards"
            name="gift cards"
            elements={[
              ["Happy birthday", "/hbd-cards"],
              ["Thank you", "/ty-cards"],
              ["Christmas", "/xmas-cards"],
              ["Traditional", "/traditional-cards"],
            ]}
          />
        </li>
        <li>
          <Link to="/order-now" className="nav-link-v1">
            ORDER NOW!
          </Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link to="/login" className="nav-link-v1">
                LOGIN
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link-v1">
                REGISTER
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <span className="welcome">Welcome, {user.username}</span>
            </li>
            <li>
              <button className="btn btn-danger" onClick={handleLogout}>
                Log out
                <i className="mx-1 bi bi-box-arrow-right"></i>
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
