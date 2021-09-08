import React from 'react';


import Skus from './Products/Skus';
import CartOverview from './CartOverview';

import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

const ShoppingCart = () => (
    <>
        <h1>Checkout</h1>
        <h2>
            With{' '}
            <a href="https://use-shopping-cart.netlify.app/">sherry'ng</a>
        </h2>
        <CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl={`${window.location.origin}/page-2/`}
        cancelUrl={`${window.location.origin}/`}
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