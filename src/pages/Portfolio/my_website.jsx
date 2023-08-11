import styled from 'styled-components';
import colors from '../../utils/style/colors';
import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

const MyWebsitePage = styled.div`
  min-height: 100vh;
  margin-top: 19px;
  margin-left: 15px;
`
const Flex = styled.div`
  display: flex;
`
const DescriptionContainer =styled.div`
  width: 62%;
`

const Title = styled.h2`
  font-family: 'Space Mono',monospace;
  font-weight: bold;
  font-size: 17px;
  padding-right: 10px;
`
const Year = styled.h2`
  font-family: 'Space Mono',monospace;
  font-size: 17px;
  color: ${colors.third};
`
const DescriptionMywebsite = styled.p`
  font-family: 'Roboto Mono',monospace;
  font-size: 12px;
  padding-top: 1em;
  margin-bottom: 5em;
`

const PictureMyWebsite = styled.img`
  height: 29em;
  width: 34em;
  `
  const PictureMyWebsiteDesktop = styled.div`
  width: 545px;
  display: flex;
  border: 0.5px solid black;
`
const MyWebsiteLink = styled.a`
  font-family: 'Roboto Mono',monospace;
  text-decoration: none;
  font-weight: lighter;
  font-size: 13px;
  font-style: italic;
  margin-right: 4em;
  color: ${colors.fourth};
`

const dataMyWebsite = [
  { imageWebsite: require('../../assets/mywebsite.png'), },
  { imageWebsite:require('../../assets/mywebsite2.png'), },
  { imageWebsite:require('../../assets/mywebsite3.png'), },
  { imageWebsite:require('../../assets/mywebsite4.png'), },
  { imageWebsite:require('../../assets/mywebsite5.png'), },
];

const MyWebsite = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <MyWebsitePage>
      <DescriptionContainer>
        <Flex>
          <Title>Mon application</Title>
          <Year>2023</Year>
        </Flex>
          <MyWebsiteLink href="https://www.oceane-villeneuve.fr" target="_blank">www.oceane-villeneuve.fr</MyWebsiteLink>
          <MyWebsiteLink href="https://www.figma.com/file/Xx9JH7NpAeIAawMUUxRzUt/mon-site?type=design&node-id=0-1&mode=design" target="_blank">www.figma.com</MyWebsiteLink>
        <DescriptionMywebsite>
        J'ai créé ce site pour offrir une vitrine interactive de mon parcours professionnel.
        En partageant mon CV et mon portfolio via une application React, je vise à présenter mes compétences de manière interactive.
        L'intégration d'un formulaire de contact avec Email.js facilite les échanges avec les visiteurs intéressés.
        <br/>
        En ce qui concerne l'UX-UI, j'ai conçu une maquette sur Figma en version desktop, que j'ai adaptée pour mobile en
        utilisant le principe du responsive design, garantissant ainsi une expérience utilisateur optimale.
        <br/>
        Mon objectif est de fournir une plateforme permettant de présenter mes compétences et expériences professionnelles de manière convaincante.
        </DescriptionMywebsite>
    </DescriptionContainer>
      <PictureMyWebsiteDesktop>
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect} indicators={false} variant={'dark'}>
        {dataMyWebsite.map((slide, i) => {
          return (
          <Carousel.Item>
            <PictureMyWebsite className="d-block " src={slide.imageWebsite} />
          </Carousel.Item>
        )
        })}
      </Carousel>
      </PictureMyWebsiteDesktop>
    </MyWebsitePage>
  )
}

export default MyWebsite;
