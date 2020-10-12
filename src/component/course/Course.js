import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import data from '../data/data'
import Product from '../product/Product';
import './Course.css'


const Course = () => {
    const [course,setCourse] = useState([]);
    useEffect(()=>{
        setCourse(data);
    })
    const [cart,setCart] = useState([]);
    const handleAddCourse = (product)=>{
         const newCart = [...cart,product];
         setCart(newCart);
    }
    
    
    return (
        <div className='container'>
            
            <div className='product'>
             <div className='box'>
                {
                  course.map(pd=><Product course={pd} handle={handleAddCourse}></Product>)
                }
    
              </div>
            </div>
            <div className='cart'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Course;