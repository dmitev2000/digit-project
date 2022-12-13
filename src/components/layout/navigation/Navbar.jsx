import logo from '../../../assets/img/logo.png';
import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  window.onscroll = function () {
    let links = document.querySelectorAll(".nav-link-v1");
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.querySelector("nav").style.backgroundColor = "white";
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "black";
      }
    } else {
      document.querySelector("nav").style.backgroundColor = "transparent";
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "white";
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
        <li className="nav-link-v1">MK | EN</li>
        <li>
          <Link to="/" className="nav-link-v1">ДОМА</Link>
        </li>
        <li>
          <Link to="/menu" className="nav-link-v1">МЕНИ</Link>
        </li>
        <li>
          <Link to="/order-now" className="nav-link-v1 nav-link-order-now">НАРАЧАЈТЕ ВЕДНАШ!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
