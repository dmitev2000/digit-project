import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  window.onscroll = function () {
    let links = document.querySelectorAll(".nav-link-v1");
    let dropbtns = document.querySelectorAll(".dropbtn");
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.querySelector("nav").style.backgroundColor = "white";
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "black";
      }
      for (let i = 0; i < dropbtns.length; i++) {
        dropbtns[i].style.color = "black";
      }
    } else {
      document.querySelector("nav").style.backgroundColor = "transparent";
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "white";
      }
      for (let i = 0; i < dropbtns.length; i++) {
        dropbtns[i].style.color = "white";
      }
    }
  };

  return (
    <nav
      className={`px-5 ${
        location.pathname === "/" ? "bg-transparent" : "bg-green"
      }`}
    >
      <div className="d-flex justify-content-center align-items-center flex-column">
        <img src={logo} alt="starbucks logo" />
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
            name="gift cards"
            elements={[
              ["Happy birthday", "/hbd-cards"],
              ["Thank you", "/ty-cards"],
              ["Traditional", "/traditional-cards"],
            ]}
          />
        </li>
        <li>
          <Link to="/order-now" className="nav-link-v1">
            ORDER NOW!
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
