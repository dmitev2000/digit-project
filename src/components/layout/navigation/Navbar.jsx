import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("locations-btn").style.display = "none";
      document.querySelector('nav').style.backgroundColor = "white";
      document.querySelector('nav').style.color = "black";
    } else {
      document.getElementById("locations-btn").style.display = "flex";
      document.querySelector('nav').style.backgroundColor = "transparent";
      document.querySelector('nav').style.color = "white";

    }
  };
  return (
    <nav>
      <img src={logo} alt="dominos logo" />
      <ul>
        <li>MK | EN</li>
        <li>ДОМА</li>
        <li>
          <button>МЕНИ</button>
        </li>
        <li>НАРАЧАЈТЕ ВЕДНАШ!</li>
      </ul>
    </nav>
  );
};

export default Navbar;
