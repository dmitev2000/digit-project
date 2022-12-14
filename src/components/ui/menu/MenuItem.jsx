import React from "react";
import "./MenuItem.css";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ item }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/product/${item._id}`);
  }
  
  return (
    <div className="menu-item" onClick={clickHandler}>
      <div className="text-center">
        <img src={item.image} alt="" />
        <h3 className="fw-bold mt-2">{item.title}</h3>
      </div>
    </div>
  );
};

export default MenuItem;
