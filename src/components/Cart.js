import React, { useState } from "react";

const Cart = ({cartItems, updateCartItem, removeCartItem}) => {

    const totalAmount = cartItems.reduce((acc,item) => acc + item.price * item.quantity,0);
    const discountedPrice = totalAmount - (totalAmount * 0.01);

    return(
        <div className="cart">
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.imageURL} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>Rs {item.price * item.quantity}</p>
                    <input type='number' value={item.quantity} onChange={(e) => updateCartItem(item.id, e.target.value)} />
                    <button onClick={() => removeCartItem(item.id)}>Delete</button>
                </div>
            ))}
            <div className="total-amount">
                <h3>Total amount: Rs {totalAmount}</h3>
                <h3>Discount: 10%</h3>
                <h3>Final Price: Rs {discountedPrice}</h3>
            </div>
            <button onClick={(e) => alert('successfull')}>Checkout</button>
        </div>
    );
};

export default Cart;