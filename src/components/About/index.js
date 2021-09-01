import React from 'react'
import { Button } from '../ButtonElements';
import { Link } from 'gatsby'
import "./About.css"; 

const About = () => {
    return (
        <div className="about-container">
        <h1>About me</h1>
        <p>I make cakes</p>                      
        <p>And smoke weed n shit</p>                      
        <div className="hero-btns">
       <Button fontBig big primary as={Link} to="/email">Contact me!</Button>
        </div>
    </div>
    )
}

export default About

