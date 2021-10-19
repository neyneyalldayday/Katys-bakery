import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import { Button } from '../ButtonElements';
import img from '../../images/BakeryLogo.png';
import img2 from '../../images/BakeryLogoM.png'




function HeroSection() {
    return (
        <HeroContainer>
                     
           <HeroBg/> 
         
           <HeroContent>
               <HeroItems>                   
                   <Button fontbig="true" big="true" primary="true" as={Link} to="/packages">Interested?</Button>
               </HeroItems>          
           </HeroContent>           
        </HeroContainer>
    )
  }

  export default HeroSection



  const HeroContainer = styled.div`     
   background: #FCD3EB ; 
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
  background-image: url(${img}); 
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  max-height: 100vh;
  
  object-fit: contain;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
 

  @media screen and (max-width: 768px) {
    background-image: url(${img2});       

       
    }
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
  justify-content: end;
  
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;  
  `;

  
  
  

 