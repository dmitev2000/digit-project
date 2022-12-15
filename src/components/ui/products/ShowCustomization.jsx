import React from 'react'
import ProductInfo from './ProductInfo';

const ShowCustomization = ({ product }) => {
  return (
    <div className='show-customization mt-5 mt-5'>
        <ProductInfo product={product} />
    </div>
  )
}

export default ShowCustomization;