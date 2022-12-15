import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import './ProductCustomization.css';
import ShowCustomization from "./ShowCustomization";

const ProductCustomization = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios.get(`http://localhost:5000/products/${id}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }

  return <div className="product-customization-wrapper">
    <ShowCustomization product={product} />
  </div>;
};

export default ProductCustomization;