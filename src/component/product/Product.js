import React from 'react';
import './Product.css';
const Product = (props) => {
    const product = props.course;
    return (
        <div className='products'>
            <h1>{product.name}</h1>
            <img className='photo' src={product.img}/>
            <p>${product.price}</p>
            <button className="btn" onClick={()=>props.handle(product)}>Enrool Now</button>
        </div>
    );
};

export default Product;