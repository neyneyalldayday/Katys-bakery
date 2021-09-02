import React from 'react'
import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin,
    FaTwitter, 
    FaYoutube, 
} from "react-icons/fa"
import { 
    FooterContainer, 
    SocialIcon,
    SocialIcons, 
    SocialIconLink, 
    SocialLogo, 
    SocialMedia, 
    SocialMediaWrap, 
    WebsiteRights,
 } from "./FooterElements"

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
              <SocialMediaWrap>
                  <SocialLogo to="/">
                      <SocialIcon />
                      weBake
                  </SocialLogo>
                  <WebsiteRights>S.B{new Date().getFullYear()}</WebsiteRights>
                  <SocialIcons>
                      <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                         <FaFacebook /> 
                      </SocialIconLink>
                      <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                         <FaInstagram /> 
                      </SocialIconLink>
                      <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                         <FaYoutube /> 
                      </SocialIconLink>
                      <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                         <FaTwitter /> 
                      </SocialIconLink>
                      <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                         <FaLinkedin /> 
                      </SocialIconLink>
                  </SocialIcons>
                  </SocialMediaWrap>  
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
