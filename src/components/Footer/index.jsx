import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import ReactLogo from '../../assets/react_logo.png';

const FooterContainer = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
  border-top: 0.5px solid black;
  position: relative;
`

const FooterInformation = styled.div`
  font-family: 'Roboto Mono',monospace;
  font-size: 11px;
  font-weight: 200;
  font-style: italic;
  text-align: center;
  `
const PowerByReact = styled.div`
  font-family: 'Pinyon Script',cursive;
  position: absolute;
  bottom: 28px;
  right: 5em;
  font-size: 19px;
`
const ReactLogoStyled = styled.img`
  height: 27px;
  width: 32px;
  position: absolute;
  object-fit: cover;
  bottom: 5px;
  right: -40px;
`
const FooterInformationMobile = styled.div`
  font-family: 'Roboto Mono',monospace;
  font-size: 11px;
  font-weight: 200;
  font-style: italic;
  display: flex;
  text-align: center;
`

const PowerByReactMobile = styled.div`
  font-family: 'Pinyon Script',cursive;
  bottom: 28px;
  right: 5em;
  font-size: 14px;
  margin-left: 3em;

`

const FooterContainerMobile = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
  border-top: 0.5px solid black;
  display: flex;
  justify-content: center;
`

const DesktopFooter = () => (
  <FooterContainer>
    <FooterInformation>
      2023 - Développé et designé par Océane VILLENEUVE
    </FooterInformation>
    <PowerByReact>
      Powered by React
      <ReactLogoStyled src={ReactLogo} />
    </PowerByReact>
  </FooterContainer>
);

const MobileFooter = () => (
  <FooterContainerMobile>
    <FooterInformationMobile>
      © 2023 - Océane VILLENEUVE
    <PowerByReactMobile>
      Powered by React
    </PowerByReactMobile>
    </FooterInformationMobile>
  </FooterContainerMobile>
);

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
    {isMobile ? <MobileFooter /> : <DesktopFooter />}
    </>
  );
};

export default Footer;
