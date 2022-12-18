import React from 'react'
import './Orders.css';
import Order from './Order';

const OrderList = ({ orders }) => {
    console.log(orders);
  return (
    <div className='d-flex justify-content-center align-items-center flex-wrap'>
        {orders.map(order => {
            return <Order key={order._id} data={order} />
        })}
    </div>
  )
}

export default OrderList;