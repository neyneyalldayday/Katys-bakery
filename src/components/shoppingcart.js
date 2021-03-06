import React from 'react';


import Skus from './Products/Skus';
import CartOverview from './CartOverview';


import { CartProvider } from 'use-shopping-cart';



const ShoppingCart = () => (
    <>
        <h1>Checkout</h1>
        <h2>
            With{' '}
            <a href="https://useshoppingcart.com">Sherry'ng</a>
        </h2>
        <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={"pk_live_51JNN6MKUVY5Zu28JTVZE3PFvJt3VbxCXyzNtJvqk9KFrpixE7qbiYJNxFn1BbyXxo7b6T1zfNxxvSdQcw5cofo7B00hn6HbaRU"}
        successUrl="https://stripe.com"
        cancelUrl="https://localhost:8000/packages"
        currency="USD"
        allowedCountries={['US']}
        billingAddressCollection={true}
        >
            <CartOverview />
            <Skus />
           </CartProvider>
    </>
);

export default ShoppingCart;