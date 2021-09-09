import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import ShoppingCart from '../components/shoppingcart'

const Shoppingcartpage = () => {
    return (
        <div>
           <Layout>
               <CartContainer>
                <ShoppingCart />
                </CartContainer>
           </Layout>
        </div>
    )
}

export default Shoppingcartpage


const CartContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin: 1rem;






`;