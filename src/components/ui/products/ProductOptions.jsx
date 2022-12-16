import React from "react";

const ProductOptions = () => {
  return (
    <div>
      <select className="form-select mb-2 p-3" aria-label="Default select example">
        <option >Flavors</option>
        <option value="1">Apple Brown Sugar</option>
        <option value="2">Caramel Syrup</option>
        <option value="3">Cinnamon Dolce Syrup</option>
      </select>
      <select className="form-select mb-2 p-3" aria-label="Default select example">
        <option >Toppings</option>
        <option value="1">Barista Cocoa Powder</option>
        <option value="2">Caramel Brulee Topping</option>
        <option value="3">Chestnut Praline Topping</option>
      </select>
      <select className="form-select mb-2 p-3" aria-label="Default select example">
        <option >Sweetener Packets</option>
        <option value="1">Add Sugar</option>
        <option value="2">Add Honey</option>
        <option value="3">Add Stevia</option>
      </select>
    </div>
  );
};

export default ProductOptions;
