import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import appstore from "../../../assets/img/appstore.png";
import playstore from "../../../assets/img/playstore.png";

const Footer = () => {
  return (
    <footer>
      <div className="social-media d-flex">
        <img src={logo} alt="" />
        <div className="d-flex justify-content-center align-items-center">
          <a className="social-media-links" href="#!">
            <i className="bi bi-facebook"></i>
          </a>
          <a className="social-media-links" href="#!">
            <i className="bi bi-instagram"></i>
          </a>
          <a className="social-media-links" href="#!">
            <i className="bi bi-twitter"></i>
          </a>
          <a className="social-media-links" href="#!">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
      <div className="grid">
        <ul>
          <li>
            <h2 className="text-light fw-bold">About us</h2>
          </li>
          <li>
            <Link to="/our-company" className="footer-links">
              Our company
            </Link>
          </li>
          <li>
            <Link to="/our-coffee" className="footer-links">
              Our coffee
            </Link>
          </li>
          <li>
            <Link to="/our-service" className="footer-links">
              Our service
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <h2 className="text-light fw-bold">Social impact</h2>
          </li>
          <li>
            <Link to="/people" className="footer-links">
              People
            </Link>
          </li>
          <li>
            <Link to="/planet" className="footer-links">
              Planet
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <h2 className="text-light fw-bold">Business partners</h2>
          </li>
          <li>
            <Link to="/suppliers" className="footer-links">
              Suppliers
            </Link>
          </li>
          <li>
            <Link to="/cgc-sales" className="footer-links">
              Corporate Gift Card Sales
            </Link>
          </li>
          <li>
            <Link to="/office" className="footer-links">
              Office & Food
            </Link>
          </li>
        </ul>
        {/* <li>
          <h2 className="text-light fw-bold">Get the app</h2>
        </li> */}
        {/* <li>
          <img className="platforms m-0" src={appstore} alt="app store" />
          <img className="platforms m-0" src={playstore} alt="play store" />
        </li> */}
        <ul>
          <li>
            <h3 style={{ color: "White" }}>Contact us</h3>
            <h5 style={{ color: "White" }}>Phone: +389 70 346 494</h5>
            <h5 style={{ color: "White" }}>Mail: starbucks@digit.com</h5>
            <h5 style={{ color: "White" }}>
              Address: Volgogradska 2, Skopje City Mall
            </h5>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
