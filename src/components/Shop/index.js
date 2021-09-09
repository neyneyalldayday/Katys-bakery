import React from 'react';
import ShoppingCart from '../shoppingcart';


import "./shop.css"


const Shop = () => {
    return (
        <>
        <div className="shop-container">
           <h1>Shop treats</h1>
            <div className="shop-image-container">            
              <ShoppingCart /> 
            </div>
        </div>
            
        </>
    )
}

export default Shop
