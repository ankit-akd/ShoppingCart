import './App.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // function to add items into cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if(existingItem){
        return prevItems.map((item) => 
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        );
      } 
      return [...prevItems, {...product, quantity:1}]
    });
  };

  // function to update items quantity from cart page
  const updateCartItem = (productId, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => 
        item.id === productId ? {...item, quantity: parseInt(quantity)} : item
      );
    })
  };

  //function to remove items from cart
  const removeCartItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route exact path = "/" element={<HomePage addToCart={addToCart} cartItems={cartItems}/>}>
            
          </Route>
          <Route exact path = '/cart' element={<CartPage cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />}>
            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
