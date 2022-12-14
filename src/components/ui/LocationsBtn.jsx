import React from "react";
import "./LocationsBtn.css";

const LocationsBtn = () => {

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log(position.coords.latitude + " " + position.coords.longitude);
  }
  
  return (
    <div
      id="locations-btn"
      className="locations-btn"
      onClick={getLocation}
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
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
