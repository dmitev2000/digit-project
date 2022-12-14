import React from "react";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="text-center">
        <img src={item.image} alt="" />
        <h3 className="fw-bold mt-2">{item.title}</h3>
      </div>
    </div>
  );
};

export default MenuItem;
