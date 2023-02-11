import React from "react";
import './ScrollTopBtn.css';

const ScrollTopBtn = () => {
  return (
    <button id="scroll-top-btn" className="scroll-top-btn"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <i className="bi bi-arrow-up-circle"></i>
    </button>
  );
};

export default ScrollTopBtn;
