import React from "react";

const ProductSize = ({ imgSize, name, val }) => {
  return (
      <div className="d-flex justify-content-center flex-column">
        <i style={{ fontSize: imgSize }} className="bi bi-cup-straw"></i>
        <span className="fw-bold">{name}</span>
        <span className="text-muted">{val} fl oz</span>
      </div>
  );
};

export default ProductSize;
