import React, {useState} from "react";
import Cart from "../components/Cart";
import '../App.css';
import NavigationBar from "../components/NavigationBar";

const CartPage = ({cartItems, updateCartItem, removeCartItem}) => {
    return(
        <div className="cart-page">
            <NavigationBar cartItems={cartItems}/>
            <Cart cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />
        </div>
    );
};

export default CartPage;
