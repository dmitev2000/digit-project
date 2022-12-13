import React from "react";
import ProductList from "./products/ProductList";
import starbucks_coffee from '../../assets/img/starbucks-coffee.png';

const BestSellers = () => {
  const dummy_data = [
    {
      id: 0,
      title: "title1",
      img: starbucks_coffee,
      isBestSeller: false,
    },
    {
      id: 1,
      title: "title2",
      img: starbucks_coffee,
      isBestSeller: false,
    },
    {
      id: 2,
      title: "title3",
      img: starbucks_coffee,
      isBestSeller: true,
    },
    {
      id: 3,
      title: "title4",
      img: starbucks_coffee,
      isBestSeller: false,
    },
    {
      id: 4,
      title: "title5",
      img: starbucks_coffee,
      isBestSeller: true,
    },
    {
      id: 5,
      title: "title6",
      img: starbucks_coffee,
      isBestSeller: true,
    },
    {
      id: 6,
      title: "title7",
      img: starbucks_coffee,  
      isBestSeller: false,
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-5">Bestsellers</h1>
      <ProductList products={dummy_data.filter((p) => p.isBestSeller)} />
    </div>
  );
};

export default BestSellers;
