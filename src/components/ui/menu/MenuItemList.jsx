import React from "react";
import MenuItem from "./MenuItem";
import "./MenuItem.css";

const MenuItemList = ({ data }) => {
  return (
    <div className="container m-0">
      <div className="d-flex w-100 menu-list py-5">
        {data.map((element) => {
          return <MenuItem item={element} key={element._id} />;
        })}
      </div>
    </div>
  );
};

export default MenuItemList;
