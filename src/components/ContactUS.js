import React, {useState} from "react"
import emailjs from "emailjs-com"
import styled from 'styled-components'
import EmailMessage from "./EmailMessage"
import "./ContactUs.css"





const ContactUs = () => { 
  const [showMessage, setShowMessage] = useState(false)

  

 
  
  function sendEmail(event) {    
    event.preventDefault();

    emailjs
      .sendForm(
        "service_sgvr57i",
        "template_8eyltc9",
        event.target,
        "user_mhbJdi6jtA3khrB3mb8ec"
      )
      .then(
        result => { 
          setShowMessage(true)               
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        },
        event.target.reset()
        );

       
        
   
  }

  return (    
    <Container>
    <Section>
        <H1>Have Questions?</H1>
        <H1>email us!!</H1>       
    <Form  onSubmit={sendEmail}>
                <H3>🍮</H3>
            <Subject type="text" placeholder="Subject" name="subject" />
                <H3>🥧</H3>
                    <Name type="text" placeholder="Your name" name="name" />
                    <H3>🧁</H3>
                    <EmailAddress type="email" placeholder="Email Address" name="email" />
               <H3>🍪</H3>
            <Textarea name="message" placeholder="Your message" />           
            <input  type="submit" value="Send Message"  />           
        </Form>       
        <H2>{showMessage ? <EmailMessage/>  : null  }</H2>                                       
    </Section>                  
</Container>
    )};

    export default ContactUs

    const H1 = styled.h1`
      text-align: center;
     justify-content: center;
     display: flex;
     flex-direction: column;
     margin: 2rem;
     
     
`;

const H2 = styled.h2`
     position: relative;
     justify-content: center;
     display: flex;
     flex-direction: column;

`;

   

const Section = styled.section`
min-width: 100%;
max-height: 100%;
padding: 4rem 0rem;
`;
const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;
background: #CA8FB1;
@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

const Form = styled.form`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 90%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

const Subject = styled.input`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;
height: 40px;
width: 60%;
border: none;
`;

const Name = styled.input`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;
height: 40px;
width: 60%;
border: none;
`;

const EmailAddress = styled.input`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;
height: 40px;
width: 60%;
border: none;
`;

const H3 = styled.h3`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;

width: 60%;
border: none;
`;

const Textarea = styled.textarea`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;
height: 40px;
width: 60%;
margin-bottom: 5px;
border: none;
`;