import React from 'react';
import styled from 'styled-components';
import ReactLogo from '../../assets/react_logo.png';

const FooterContainer = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
  border-top: 0.5px solid black;
  position: relative;
`

const FooterInformation = styled.div`
  font-family: 'Roboto Mono',monospace;
  font-size: 9px;
  font-weight: 200;
  font-style: italic;
  text-align: center;
  `
const PowerByReact = styled.div`
  font-family: 'Pinyon Script',cursive;
  position: absolute;
  bottom: 28px;
  right: 5em;
`
const ReactLogoStyled = styled.img`
  height: 32px;
  width: 36px;
  position: absolute;
  object-fit: cover;
  bottom: -3px;
  right: -40px;
`

const Footer = () => (
  <FooterContainer>
    <FooterInformation>
      2023 - Développé et designé par Océane VILLENEUVE
    </FooterInformation>
    <PowerByReact>
      Powered by
      <ReactLogoStyled src={ReactLogo}/>
    </PowerByReact>
  </FooterContainer>
)

export default Footer;
