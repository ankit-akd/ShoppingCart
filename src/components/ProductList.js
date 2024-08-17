import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../App.css';

const ProductList = ({searchItem, addToCart}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(' https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log('Error in reading values from API',error))
    },[]);

    const filterProducts = (products) => {
        return products.filter((product) => {
            const matchesSearchItem = searchItem
                ? product.name.toLowerCase().includes(searchItem.toString().toLowerCase()) ||
                  product.color.toLowerCase().includes(searchItem.toString().toLowerCase()) ||
                  product.type.toLowerCase().includes(searchItem.toString().toLowerCase())
                : true;    
        
    
            return matchesSearchItem;
        });
    };
    const filteredProducts = filterProducts(products);
    
    return (
        <div className='product-list'>
            {filteredProducts.map((element) => (
                <ProductCard key={element.id} product={element} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;