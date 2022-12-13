import React from "react";
import "./Popup.css";

const Popup = () => {
  return (
    <div id="popup" className="popup">
      <button className="close"
        onClick={() => {
          document.getElementById("popup").style.opacity = 0;
        }}
      >
        X
      </button>
    </div>
  );
};

export default Popup;
