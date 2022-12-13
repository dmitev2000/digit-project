import React from "react";
import Triangle from "../triangle/Triangle";
import './TastesYouLove.css';

const TastesYouLove = () => {
  return (
    <div className="my-5 container tyl">
      <h1 className="tyl-title">Tastes you'll love</h1>
      <h3 className="text-muted fst">Dishes we recommend you try asap.</h3>
      <div className="dish-category-wrapper my-5 w-100">
        <div className="dish-category">
          <h3 className="dish-category-title">Cookie season</h3>
          <Triangle />
        </div>
        <div className="dish-category">
          <h3 className="dish-category-title">Christmas favorites</h3>
          <Triangle />
        </div>
        <div className="dish-category">
          <h3 className="dish-category-title">Coctails for a crowd</h3>
          <Triangle />
        </div>
      </div>
    </div>
  );
};

export default TastesYouLove;
