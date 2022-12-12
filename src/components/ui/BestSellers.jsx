import React from 'react'

const BestSellers = () => {
    const dummy_data = [
        {id: 0, title: 'title1', img: '', isBestSeller: false},
        {id: 1, title: 'title1', img: '', isBestSeller: false},
        {id: 2, title: 'title1', img: '', isBestSeller: true},
        {id: 3, title: 'title1', img: '', isBestSeller: false},
        {id: 4, title: 'title1', img: '', isBestSeller: true},
        {id: 5, title: 'title1', img: '', isBestSeller: true},
        {id: 6, title: 'title1', img: '', isBestSeller: false}
    ]
  
    return (
    <div>
        <h1>Bestsellers</h1>
        {dummy_data.map((product, index) => {
            return <span key={index}>{product.title}</span>
        })}
    </div>
  )
}

export default BestSellers;