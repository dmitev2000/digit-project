import React from "react";
import MenuItem from "./MenuItem";
import "./MenuItem.css";

const MenuItemList = ({ data }) => {
  return (
    <div className="container py-5 m-0">
      <h1 className="mt-5">Menu:</h1>
      <div className="d-flex w-100 menu-list py-5">
        {data.map((element) => {
          return <MenuItem item={element} key={element._id} />;
        })}
      </div>
    </div>
  );
};

export default MenuItemList;
