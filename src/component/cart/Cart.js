import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
    return (
        <div className='cart'>
           <h1>Enrool courses</h1> 

           <p>total-enrool-course: {cart.length}</p>
           <p>total-price: ${total}</p>
        </div>
    );
};

export default Cart;