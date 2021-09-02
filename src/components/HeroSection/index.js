import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import { Button } from '../ButtonElements';



function HeroSection() {
    return (
        <HeroContainer>            
           <HeroBg>
                         
           </HeroBg>
           <HeroContent>
               <HeroItems>
                   <HeroH1>Sherry'ng Bakery</HeroH1>
                   <HeroP>check it out</HeroP>
                   <Button fontBig big primary as={Link} to="/packages">Interested?</Button>
               </HeroItems>          
           </HeroContent>           
        </HeroContainer>
    )
  }

  export default HeroSection



  const HeroContainer = styled.div`
  background: #EB65B2;
  display: flex;  
  justify-content: center;
  align-items: center;
  height: 100vh;  
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;
  `;

  const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
 
  `;

  const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  
  `;

  const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) /2);
  `;

  const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  
  `;

  const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  `;

  const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  `;
  
  

 