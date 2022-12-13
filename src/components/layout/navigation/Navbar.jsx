import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
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
    <nav className="px-5">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <img src={logo} alt="starbucks logo" />
        <p className="text-light fst-italic mb-0">text here...</p>
      </div>
      <ul>
        <li>
          <Link to="/" className="nav-link-v1">
            HOME
          </Link>
        </li>
        <li>
          <Dropdown
            name="menu"
            elements={["Drinks", "Food", "At home coffee", "Merchandise"]}
          />
        </li>
        <li>
          <Dropdown
            name="gift cards"
            elements={["Happy birthday", "Thank you", "Traditional"]}
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
