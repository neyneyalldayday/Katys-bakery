import React, {useState, useEffect} from 'react'
import { Button } from '../ButtonElements';
import "./About.css"; 
import  ContactUs  from '../ContactUs';


const About = () => {
    const[click, setClick] = useState(false)
    const[email, setEmail] = useState(false)

    const handleClick = () => setClick(!click)

    const contactUs = () => {
        if (window.scrollY >= 80) {
            setEmail(true)
        } else {
            setEmail(false)
        }

    }

    useEffect(() => {
        contactUs()
        window.addEventListener("email" , contactUs)
    }, [])
    return (
        <div className="about-container">
        <h1>About Sherry'ng</h1>
        <p>we make cakes</p>                      
        <p>come eat some cakes</p>                      
        <div className="hero-btns">
       <Button className="butt" fontbig="true"  primary="true" onClick={handleClick}>Contact me!</Button>
        </div>
        <section active={email}>
        {click ? <ContactUs /> : null}
        </section>
    </div>
    )
}

export default About



