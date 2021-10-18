import * as React from 'react'
import Navbar from './Navbar'
import "./layout.css"
import Footer from './Footer'
import 'semantic-UI-css/smemantic.min.css'

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        <main>{children}</main>
         <Footer />   
        </>
    )
}

export default Layout
