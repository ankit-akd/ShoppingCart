import React from 'react';
import '../App.css';

const ProductCard = ({product, addToCart}) => {
    
    return(
        <div className='product-card'>
            <img src = {product.imageURL} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rs. {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductCard;