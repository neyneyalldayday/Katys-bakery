import React from 'react';
import Checkout from '../checkout';
import "./shop.css"


const Shop = () => {
    return (
        <>
        <div className="shop-container">
           <h1>Shop treats</h1>
            <div className="shop-image-container">
            <Checkout />   
            <Checkout />   
            <Checkout />       
            </div>
        </div>
            
        </>
    )
}

export default Shop
