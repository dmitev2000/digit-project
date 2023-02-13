import React, { useContext } from "react";
import SizeContext from '../../../context/SizeContext';

const ProductSize = ({ imgSize, name, val, multiplier }) => {
  const SizeCtx = useContext(SizeContext);
  
  const clickHandler = (e) => {
    var sizes = document.getElementsByClassName("size-list-item");
    for (var i = 0; i < sizes.length; i++) {
      if (sizes[i].classList.contains("border-for-size"))
        sizes[i].classList.remove("border-for-size");
    }
    if (e.target.nodeName === "DIV") {
      e.target.classList.add("border-for-size");
    } else {
      e.target.parentNode.classList.add("border-for-size");
    }
    SizeCtx.updateValues(name, multiplier);
  };

  return (
    <div onClick={clickHandler} className="p-2 size-list-item">
      <i style={{ fontSize: imgSize }} className="bi bi-cup-straw"></i>
      <span className="fw-bold">{name}</span>
      <span className="text-muted">{val} fl oz</span>
    </div>
  );
};

export default ProductSize;
