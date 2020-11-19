import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const courseCount = props.courseCount;
    console.log(courseCount)
    const total = courseCount.reduce((total, crs) => total + crs.price, 0)
    console.log(total)
    return (
        <div>
            <h2>Total course: {courseCount.length}</h2>
             <h3>Total Price: ${total}</h3>
             
        </div>
    );
};

export default Cart;