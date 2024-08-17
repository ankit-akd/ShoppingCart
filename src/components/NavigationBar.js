import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const NavigationBar = ({cartItems}) => {

    return(
        <div className='navigation'>
               <header className="header"> 
                <h1>Fashion Store</h1>
                <div className="header-right">
                    <Link to="/">Products</Link>
                    <Link to ="/cart" className="cart-icon">
                        <span className="cart-count">{cartItems.length ? cartItems.length : 0}</span>
                        🛒
                    </Link>
                </div>
            </header>            
        </div>
    )

};

export default NavigationBar;