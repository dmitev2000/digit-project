import React from "react";
import Dish from "../dish/Dish";
import Triangle from "../triangle/Triangle";
import "./TastesYouLove.css";

const TastesYouLove = () => {
  return (
    <div className="my-5 container tyl">
      <h1 className="tyl-title">Tastes you'll love</h1>
      <h3 className="text-muted fst">Dishes we recommend you try asap.</h3>
      <div className="dish-category-wrapper my-5 w-100">
        <div className="dish-category">
          <h3 className="dish-category-title mb-4">Cookie season</h3>
          <Triangle />
          <Dish
            text="Milano Reindeer Cookies"
            img="https://hips.hearstapps.com/hmg-prod/images/delish-milanoreindeercookies-131-ls-1633720844.jpg?crop=0.668xw:1.00xh;0.332xw,0&resize=360:*"
          />
          <Dish
            text="Santa Cookies"
            img="https://hips.hearstapps.com/hmg-prod/images/santa-cookies1-1663332869.jpg?crop=0.683xw:1.00xh;0.277xw,0&resize=360:*"
          />
          <Dish
            text="Italian Christmas Cookies"
            img="https://hips.hearstapps.com/hmg-prod/images/delish-ricotta-cookies-1638982217.jpg?crop=0.633xw:0.950xh;0.143xw,0.0120xh&resize=360:*"
          />
        </div>
        <div className="dish-category">
          <h3 className="dish-category-title mb-4">Merry everything</h3>
          <Triangle />
          <Dish
            text="Peppermint Mocha"
            img="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81248.jpg"
          />
          <Dish
            text="Caramel Brulee Latte"
            img="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81251.jpg"
          />
          <Dish
            text="Irish Cream Cold Brew"
            img="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81249.jpg"
          />
        </div>
        <div className="dish-category">
          <h3 className="dish-category-title mb-4">Protein boxes</h3>
          <Triangle />
          <Dish
            text="Cheese & Fruit Protein Box"
            img="https://globalassets.starbucks.com/assets/8fe70ac5d94145319fdd6f23545c8aa1.jpg?impolicy=1by1_medium_630"
          />
          <Dish
            text="Chickpea Bites & Avocado Protein Box"
            img="https://globalassets.starbucks.com/assets/90710b7d65e942fd9de3418767d2a5a7.jpg?impolicy=1by1_medium_630"
          />
          <Dish
            text="Cheese & Fruit Protein Box"
            img="https://globalassets.starbucks.com/assets/f9c7a91ad6f2408ba19d7a274dadeadd.jpg?impolicy=1by1_medium_630"
          />
        </div>
      </div>
    </div>
  );
};

export default TastesYouLove;
