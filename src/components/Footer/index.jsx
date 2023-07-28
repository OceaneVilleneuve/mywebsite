import React from 'react';
import styled from 'styled-components'



const FooterInformation = styled.div`
  font-family: 'Roboto Mono',monospace;
  font-size: 9px;
  font-weight: 200;
  font-style: italic;
  border-top: 0.5px solid black;
  text-align: center;
  padding-top: 2em;
  padding-bottom: 2em;
`
const PowerByReact = styled.div`

`

const Footer = () => (
  <>
    <FooterInformation>
      2023 - Développé et designé par Océane VILLENEUVE
    </FooterInformation>
    <PowerByReact>

    </PowerByReact>
  </>
)

export default Footer;
