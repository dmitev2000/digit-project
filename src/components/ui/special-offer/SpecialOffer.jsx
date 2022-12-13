import React from "react";
import "./SpecialOffer.css";
import frappuccino from "./frappuccino.png";

const SpecialOffer = () => {
  return (
    <div className="special-offer text-center">
      <div className="d-flex justify-content-evenly align-items-center flex-wrap gap">
        <p className="slogan p-0 m-0">
          It's not just Coffee, <br /> It's <span>Starbucks</span>
        </p>
        <img src={frappuccino} alt="" />
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default SpecialOffer;
