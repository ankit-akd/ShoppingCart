import React, {useState} from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import NavigationBar from '../components/NavigationBar';

const HomePage = ({addToCart,cartItems}) => {
    const [searchItem, setSearchItem] = useState('')

    return(
        <div className='home-page'>
            <NavigationBar cartItems={cartItems}/>
            <SearchBar setSearchItem={setSearchItem} />
            <ProductList searchItem={searchItem} addToCart={addToCart} />
        </div>
    );
};

export default HomePage;

