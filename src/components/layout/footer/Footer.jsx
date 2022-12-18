import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="grid">
        <ul>
          <li>
            <h3 className="text-light fw-bold">About us</h3>
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
            <h3 className="text-light fw-bold">Social impact</h3>
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
            <h3 className="text-light fw-bold">Business partners</h3>
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
        <ul>
          <li>
            <h3 className="text-light fw-bold">Contact us</h3>
          </li>
          <li>
            <p className="footer-links">Phone: +389 70 346 494</p>
          </li>
          <li>
            <p className="footer-links">Mail: starbucks@digit.com</p>
          </li>
          <li>
            <p className="footer-links">
              Address: Volgogradska 2, Skopje City Mall
            </p>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
