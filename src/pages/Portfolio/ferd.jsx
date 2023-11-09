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
  margin-right: 5em;
`

const PictureMyWebsite = styled.img`
  height: 29em;
  width: 34em;
`
const PictureContainer = styled.div`
  width: 241px;
  display: flex;
  border: 0.5px solid black;
  `

const PictureMyWebsiteDesktop = styled.div`
  width: 545px;
  display: flex;
  border: 0.5px solid black;
`

// const MyWebsiteLink = styled.a`
//   font-family: 'Roboto Mono',monospace;
//   text-decoration: none;
//   font-weight: lighter;
//   font-size: 13px;
//   font-style: italic;
//   margin-right: 4em;
//   color: ${colors.fourth};
// `

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
const PictureMyWebsiteMobileDesktopVersion = styled.img`
  height: 31em;
  width: 15em;
`

const PictureMyWebsiteDesktopMobileVersion = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
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
const SubTitle = styled.h2`
  font-family: 'Space Mono',monospace;
  font-style: italic;
  font-size: 13px;
  font-weight: bold;
  padding-right: 10px;
`
const SubYear = styled.h2`
  font-family: 'Space Mono',monospace;
  font-size: 14px;
  color: ${colors.third};
`
const FlexLinkWebsite = styled.p`
  display: flex;
  flex-direction: column;
  align-content: center;
`

// const MyWebsiteLinkMobile = styled.a`
//   font-family: 'Roboto Mono',monospace;
//   text-decoration: none;
//   font-weight: lighter;
//   font-size: 13px;
//   font-style: italic;
//   color: ${colors.fourth};
// `
const PictureContainerMobile = styled.div`
  width: 241px;
  display: flex;
  margin-left: 3em;
  border: 0.5px solid black;
`
const DescriptionMobileSub = styled.div`
  margin-top: 3rem;
  text-align: center;
  margin-bottom: 2em;
`
const FlexTitle = styled.div`
  display: flex;
  justify-content: center;
`
const dataMyWebsiteMobile = [
  { imageWebsiteMobile: require('../../assets/ferd-mobile.png'), },
  { imageWebsiteMobile:require('../../assets/frise-end-mobile.png'), },
  { imageWebsiteMobile:require('../../assets/contact-ferd-mobile.png'), },
  { imageWebsiteMobile: require('../../assets/ferd-work-mobile.png'), },
];

const dataMyWebsite = [
  { imageWebsite: require('../../assets/ferd.png'), },
  { imageWebsite:require('../../assets/info-frise-ferd.png'), },
  { imageWebsite:require('../../assets/frise-ferd.png'), },
  { imageWebsite:require('../../assets/frise-end.png'), },
  { imageWebsite:require('../../assets/contact-ferd.png'), },
  { imageWebsite:require('../../assets/ferd-work.png'), },
];

const MyWebsiteDesktop = () => {
  const [indexCarousel1, setIndexCarousel1] = useState(0); // État d'index pour le premier carrousel
  const [indexCarousel2, setIndexCarousel2] = useState(0);

  const handleSelectCarousel1 = (selectedIndex, e) => {
    setIndexCarousel1(selectedIndex);
  };

  const handleSelectCarousel2 = (selectedIndex, e) => {
    setIndexCarousel2(selectedIndex);
  };


  return (
    <MyWebsitePage>
      <Flex>
      <DescriptionContainer>
        <Flex>
          <Title>Ferd</Title>
          <Year>2023</Year>
        </Flex>
          {/* <MyWebsiteLink href="https://www.oceane-villeneuve.fr" target="_blank">www.oceane-villeneuve.fr</MyWebsiteLink>
          <MyWebsiteLink href="https://www.figma.com/file/Xx9JH7NpAeIAawMUUxRzUt/mon-site?type=design&node-id=46-13&mode=design" target="_blank">www.figma.com</MyWebsiteLink> */}
        <DescriptionMywebsite>
          Pour ce site j'ai été contacté par Ferdinand afin de réaliser la maquette de son site portfolio en tant que réalisateur et
          vidéaste.
          Ce site est créer en colaboration avec Ferdinand car il sera réalisé en pair-programming.
          <br/>
          En ce qui concerne l'UX-UI, Je me suis inspiré de l'univers cyberpunk et des couleurs
          vert et noir suite aux demande de Ferdinand. J'ai conçu une maquette sur Figma en version desktop, que j'ai adaptée pour mobile en
          utilisant le principe du responsive design.
          <br/>
          Le but est par la suite d'ajouter des animations et effet de parallax a la page.
          <br/>
          Mon objectif est de fournir une plateforme permettant à Ferdinand de présenter son travail de façon simple avec un design très marqué.
        </DescriptionMywebsite>
    </DescriptionContainer>
    <PictureContainer>
      <Carousel interval={null} activeIndex={indexCarousel1} onSelect={handleSelectCarousel1} indicators={false}>
        {dataMyWebsiteMobile.map((slide, i) => {
          return (
          <Carousel.Item>
            <PictureMyWebsiteMobileDesktopVersion className="d-block " src={slide.imageWebsiteMobile} />
          </Carousel.Item>
        )
        })}
      </Carousel>
      </PictureContainer>
    </Flex>
    <>
    <DescriptionContainer className="mt-5">
        <Flex>
          <SubTitle>Ferd version desktop - FIGMA </SubTitle>
          <SubYear>2023</SubYear>
        </Flex>
        {/* <MyWebsiteLink href="https://www.figma.com/file/Xx9JH7NpAeIAawMUUxRzUt/mon-site?type=design&node-id=0-1&mode=design" target="_blank">www.figma.com</MyWebsiteLink> */}
      </DescriptionContainer>
      <div className="mt-5">
      <PictureMyWebsiteDesktop>
      <Carousel interval={null} activeIndex={indexCarousel2} onSelect={handleSelectCarousel2} indicators={false} variant={'dark'}>
        {dataMyWebsite.map((slide, i) => {
          return (
          <Carousel.Item>
            <PictureMyWebsite className="d-block " src={slide.imageWebsite} />
          </Carousel.Item>
        )
        })}
      </Carousel>
      </PictureMyWebsiteDesktop>
      </div>
    </>
    </MyWebsitePage>
  )
}

const MyWebsiteMobile = () => {
  const [indexCarousel1, setIndexCarousel1] = useState(0); // État d'index pour le premier carrousel
  const [indexCarousel2, setIndexCarousel2] = useState(0);

  const handleSelectCarousel1 = (selectedIndex, e) => {
    setIndexCarousel1(selectedIndex);
  };

  const handleSelectCarousel2 = (selectedIndex, e) => {
    setIndexCarousel2(selectedIndex);
  };


  return (
    <MyWebsitePageMobile>
      <Flex>

      </Flex>
      <MobileFlex>
        <DescriptionContainerMobile>
          <FlexTitleMobile>
            <Title>Ferd</Title>
            <Year>2023</Year>
          </FlexTitleMobile>
          <FlexLinkWebsite>
            {/* <MyWebsiteLinkMobile href="https://www.oceane-villeneuve.fr" target="_blank">www.oceane-villeneuve.fr</MyWebsiteLinkMobile>
            <MyWebsiteLinkMobile href="https://www.figma.com/file/Xx9JH7NpAeIAawMUUxRzUt/mon-site?type=design&node-id=46-13&mode=design" target="_blank">www.figma.com</MyWebsiteLinkMobile> */}
          </FlexLinkWebsite>
          <DescriptionMyWebsiteMobile>
            Pour ce site j'ai été contacté par Ferdinand afin de réaliser la maquette de son site portfolio en tant que réalisateur et
            vidéaste.
            Ce site est créer en colaboration avec Ferdinand car il sera réalisé en pair-programming.
            <br/>
            En ce qui concerne l'UX-UI, Je me suis inspiré de l'univers cyberpunk et des couleurs
            vert et noir suite aux demande de Ferdinand. J'ai conçu une maquette sur Figma en version desktop, que j'ai adaptée pour mobile en
            utilisant le principe du responsive design.
            <br/>
            Le but est par la suite d'ajouter des animations et effet de parallax a la page.
            <br/>
            Mon objectif est de fournir une plateforme permettant à Ferdinand de présenter son travail de façon simple avec un design très marqué.
          </DescriptionMyWebsiteMobile>
      </DescriptionContainerMobile>
      <PictureContainerMobile>
      <Carousel interval={null} activeIndex={indexCarousel1} onSelect={handleSelectCarousel1} indicators={false}>
        {dataMyWebsiteMobile.map((slide, i) => {
          return (
          <Carousel.Item>
            <PictureMyWebsiteMobileDesktopVersion className="d-block " src={slide.imageWebsiteMobile} />
          </Carousel.Item>
        )
        })}
      </Carousel>
      </PictureContainerMobile>
      </MobileFlex>
      <div>
      <DescriptionMobileSub>
        <FlexTitle>
          <SubTitle>Ferd version desktop - FIGMA </SubTitle>
          <Year>2023</Year>
        </FlexTitle>
        {/* <MyWebsiteLink href="https://www.figma.com/file/Xx9JH7NpAeIAawMUUxRzUt/mon-site?type=design&node-id=0-1&mode=design" target="_blank">www.figma.com</MyWebsiteLink> */}
      </DescriptionMobileSub>
      <PictureMyWebsiteDesktopMobileVersion>
        <Carousel interval={null} activeIndex={indexCarousel2} onSelect={handleSelectCarousel2} indicators={false}>
          {dataMyWebsite.map((slide, i) => {
            return (
              <Carousel.Item>
                <PictureMyWebsiteMobile className="d-block " src={slide.imageWebsite} />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </PictureMyWebsiteDesktopMobileVersion>
    </div>
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
