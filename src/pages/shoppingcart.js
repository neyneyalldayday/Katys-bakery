import React from 'react';

import Layout from '../components/layout';
import Skus from '../components/Products/Skus';
import CartOverview from '../components/CartOverview';

import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

const ShoppingCart = () => (
    <Layout>
        <h1>Checkout</h1>
        <h2>
            With{' '}
            <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a>
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
    </Layout>
);

export default ShoppingCart;