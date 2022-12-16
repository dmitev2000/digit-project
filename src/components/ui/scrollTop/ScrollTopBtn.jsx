import React from "react";
import './ScrollTopBtn.css';

const ScrollTopBtn = () => {
  return (
    <button className="scroll-top-btn"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      Scroll Top
    </button>
  );
};

export default ScrollTopBtn;
