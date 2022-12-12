import React from "react";
import "./LocationsBtn.css";

const LocationsBtn = () => {
  return (
    <div id="locations-btn" className="locations-btn">
      <lord-icon
        src="https://cdn.lordicon.com/oaflahpk.json"
        trigger="hover"
        colors="primary:red"
        style={{ width: "50px", height: "50px" }}
      ></lord-icon>
      <span>Nearest store</span>
    </div>
  );
};

export default LocationsBtn;
