import React from 'react'
import { Button } from '../ButtonElements';
import { Link } from 'gatsby'
import "./About.css"; 

const About = () => {
    return (
        <div className="about-container">
        <h1>About Sherry'ng</h1>
        <p>we make cakes</p>                      
        <p>And smoke weed n shit</p>                      
        <div className="hero-btns">
       <Button className="butt" fontBig  primary as={Link} to="/email">Contact me!</Button>
        </div>
    </div>
    )
}

export default About

