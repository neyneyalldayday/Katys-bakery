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
        stripe={"pk_test_51JNN6MKUVY5Zu28JBbOULqZ8ynykj6ZXiBPlnYPnZ2RIjFGVwCvHnHGYFUxug0HiMlEJgZlIYUIz0Y4CXOFAwYGt00vZuxhWbx"}
        successUrl="https://stripe.com"
        cancelUrl="/"
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