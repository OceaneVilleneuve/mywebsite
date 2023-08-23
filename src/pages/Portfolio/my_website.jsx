import styled from 'styled-components';
import colors from '../../utils/style/colors';
import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useMediaQuery } from 'react-responsive';

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

const MyWebsitePageMobile = styled.div`
  min-height: 100vh;
  width: 100%
  margin-top: 19px;
`

const DescriptionContainerMobile =styled.div`
  width: 90%;
  text-align: center;
  margin-bottom: 3em;
  margin-top: 2em;
`

const MobileFlex =styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: 2em;
`

const PictureMyWebsiteMobile = styled.img`
  height: 19em;
  width: 22em;
  object-fit: cover;
`

const PictureMyWebsiteDesktopMobileVersion = styled.div`
  display: flex;
  border: 0.5px solid black;
`

const FlexTitleMobile = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`

const DescriptionMyWebsiteMobile = styled.p`
  font-family: 'Roboto Mono',monospace;
  font-size: 12px;
  padding-top: 2em;
`

const FlexLinkWebsite = styled.p`
  display: flex;
  flex-direction: column;
  align-content: center;
`

const MyWebsiteLinkMobile = styled.a`
  font-family: 'Roboto Mono',monospace;
  text-decoration: none;
  font-weight: lighter;
  font-size: 13px;
  font-style: italic;
  color: ${colors.fourth};
`

const dataMyWebsite = [
  { imageWebsite: require('../../assets/mywebsite.png'), },
  { imageWebsite:require('../../assets/mywebsite2.png'), },
  { imageWebsite:require('../../assets/mywebsite3.png'), },
  { imageWebsite:require('../../assets/mywebsite4.png'), },
  { imageWebsite:require('../../assets/mywebsite5.png'), },
];

const MyWebsiteDesktop = () => {
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
        Mon objectif est de fournir une plateforme permettant de présenter mes compétences et expériences professionnelles.
        Et aussi de permettre à toute personne intéressée par mon profil de me contacter facilement.
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

const MyWebsiteMobile = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <MyWebsitePageMobile>
      <MobileFlex>
        <DescriptionContainerMobile>
          <FlexTitleMobile>
            <Title>Mon application</Title>
            <Year>2023</Year>
          </FlexTitleMobile>
          <FlexLinkWebsite>
            <MyWebsiteLinkMobile href="https://www.oceane-villeneuve.fr" target="_blank">www.oceane-villeneuve.fr</MyWebsiteLinkMobile>
            <MyWebsiteLinkMobile href="https://www.figma.com/file/Xx9JH7NpAeIAawMUUxRzUt/mon-site?type=design&node-id=0-1&mode=design" target="_blank">www.figma.com</MyWebsiteLinkMobile>
          </FlexLinkWebsite>
          <DescriptionMyWebsiteMobile>
          J'ai créé ce site pour offrir une vitrine interactive de mon parcours professionnel.
          En partageant mon CV et mon portfolio via une application React, je vise à présenter mes compétences de manière interactive.
          L'intégration d'un formulaire de contact avec Email.js facilite les échanges avec les visiteurs intéressés.
          <br/>
          En ce qui concerne l'UX-UI, j'ai conçu une maquette sur Figma en version desktop, que j'ai adaptée pour mobile en
          utilisant le principe du responsive design, garantissant ainsi une expérience utilisateur optimale.
          <br/>
          Mon objectif est de fournir une plateforme permettant de présenter mes compétences et expériences professionnelles de manière convaincante.
          </DescriptionMyWebsiteMobile>
      </DescriptionContainerMobile>
        <PictureMyWebsiteDesktopMobileVersion>
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect} indicators={false} variant={'dark'}>
          {dataMyWebsite.map((slide, i) => {
            return (
            <Carousel.Item>
              <PictureMyWebsiteMobile className="d-block " src={slide.imageWebsite} />
            </Carousel.Item>
          )
          })}
        </Carousel>
        </PictureMyWebsiteDesktopMobileVersion>
      </MobileFlex>
    </MyWebsitePageMobile>
  )
}

const MyWebsite = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
    {isMobile ? <MyWebsiteMobile /> : <MyWebsiteDesktop />}
    </>
  );
};

export default MyWebsite;
