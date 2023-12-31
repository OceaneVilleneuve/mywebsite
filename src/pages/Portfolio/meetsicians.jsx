import styled from 'styled-components';
import colors from '../../utils/style/colors';
import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useMediaQuery } from 'react-responsive';

const MeetsiciansPage = styled.div`
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
const Website = styled.a`
  font-family: 'Roboto Mono',monospace;
  text-decoration: none;
  font-weight: lighter;
  font-size: 13px;
  font-style: italic;
  color: ${colors.fourth};
`

const DescriptionDesktop = styled.p`
  font-family: 'Roboto Mono',monospace;
  font-size: 12px;
  padding-top: 3em;
  margin-right: 5em;
`
const PictureContainer = styled.div`
  width: 16em;
  display: flex;
  border: 0.5px solid black;
  `

  const PictureMeetsicians = styled.img`
  height: 27em;
  width: 16em;
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

const PictureMeetsiciansDesktop = styled.img`
  height: 30em;
  width: 43em;
  object-fit: cover;
`
const PictureContainerDesktop = styled.div`
  width: 43em;
  display: flex;
  border: 0.5px solid black;
`
const DesktopDiv = styled.div`
  margin-top: 5em;
`

const Mobileflex = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;
`
const FlexTitle = styled.div`
  display: flex;
  justify-content: center;
`

const DescriptionContainerMobile =styled.div`
  width: 90%;
  text-align: center;
  margin-bottom: 3em;
  margin-top: 2em;
`
const PictureMeetsiciansMobileDesktop = styled.img`
  height: 16em;
  object-fit: cover;
`
const PictureContainerDesktopMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`

const PictureMeetsiciansMobile = styled.img`
  height: 27em;
  width: 16em;
`
const PictureContainerMobile = styled.div`
  width: 16em;
  display: flex;
  margin-left: 3em;
  border: 0.5px solid black;
`
const MeetsiciansPageMobile = styled.div`
  min-height: 100vh;
  margin-top: 19px;
`

const DescriptionMobileSub = styled.div`
  margin-top: 3rem;
  text-align: center;
  margin-bottom: 2em;
`
const DescriptionMobile = styled.p`
  font-family: 'Roboto Mono',monospace;
  font-size: 12px;
  padding-top: 3em;

`
const data = [
  { image: require('../../assets/meetsicians_home.png'), },
  { image:require('../../assets/meetsicians.png'), },
  { image:require('../../assets/meetsicians_filters.png'), },
  { image:require('../../assets/twentyprofil.png'), },
  { image:require('../../assets/members.png'), },
  { image:require('../../assets/profil.png'), },
  { image:require('../../assets/chat.png'), },
  { image:require('../../assets/conv.png'), },
];

const dataDesktop = [
  { imageDesktop: require('../../assets/homedesktop.png'), },
  { imageDesktop:require('../../assets/creationdestopk.png'), },
  { imageDesktop:require('../../assets/filterdesktop.png'), },
  { imageDesktop:require('../../assets/bandprofil.png'), },
  { imageDesktop:require('../../assets/memberdesktop.png'), },
  { imageDesktop:require('../../assets/muprofildesktop.png'), },
  { imageDesktop:require('../../assets/creationdestopk.png'), },
  { imageDesktop:require('../../assets/chatdesktop.png'), },
  { imageDesktop:require('../../assets/convdesktop.png'), },
];

const MeetsiciansDesktop = () => {
  const [indexCarousel1, setIndexCarousel1] = useState(0); // État d'index pour le premier carrousel
  const [indexCarousel2, setIndexCarousel2] = useState(0);

  const handleSelectCarousel1 = (selectedIndex, e) => {
    setIndexCarousel1(selectedIndex);
  };

  const handleSelectCarousel2 = (selectedIndex, e) => {
    setIndexCarousel2(selectedIndex);
  };


  return (
  <MeetsiciansPage>
    <Flex >
      <DescriptionContainer>
        <Flex>
          <Title>Meetsicians </Title>
          <Year>2023</Year>
        </Flex>
          <Website href="https://www.meetsicians.fr" target="_blank">www.meetsicians.fr</Website>
        <DescriptionDesktop>
          Pour notre projet final de formation au Wagon à Nantes,
          nous avons décidé de créer une application mobile permettant
          aux musiciens de trouver un groupe de musique proche
          de leur localisation. Cette application se nomme Meetsicians.
          <br/>
          Nous avons été réparti en groupe travail de quatre.
          <br/>
          Pour cette application, j'ai réalisé la conception UX-UI sur le logiciel Figma,
          en m'inspirant du wireframe élaboré en groupe. J'ai également développé plusieurs
          fonctionnalités de l'application, que ce soit en front-end ou en back-end avec Ruby on Rails.
          L'application est toujours en cours de développement.
        </DescriptionDesktop>
      </DescriptionContainer>
      <PictureContainer>
      <Carousel interval={null} activeIndex={indexCarousel1} onSelect={handleSelectCarousel1} indicators={false}>
        {data.map((slide, i) => {
          return (
          <Carousel.Item>
            <PictureMeetsicians className="d-block " src={slide.image} />
          </Carousel.Item>
        )
        })}
      </Carousel>
      </PictureContainer>
    </Flex>
    <Flex>
    <DesktopDiv>
      <DescriptionContainer className="mt-5">
        <Flex>
          <SubTitle>Mon interprétation en version desktop - FIGMA </SubTitle>
          <SubYear>2023</SubYear>
        </Flex>
        <Website href="https://www.figma.com/file/2j9esnIc8nTD6Ee6hyZnku/Meetsicians?type=design&node-id=708-3651&mode=design&t=AvUrV7xwkD7uOkPy-0" target="_blank">www.figma.com</Website>
      </DescriptionContainer>
        <div className="mt-5">
          <PictureContainerDesktop>
          <Carousel interval={null} activeIndex={indexCarousel2} onSelect={handleSelectCarousel2} indicators={false}>
            {dataDesktop.map((slide, i) => {
              return (
                <Carousel.Item>
                <PictureMeetsiciansDesktop className="d-block " src={slide.imageDesktop} />
              </Carousel.Item>
            )
          })}
          </Carousel>
          </PictureContainerDesktop>
        </div>
    </DesktopDiv>
    </Flex>
  </MeetsiciansPage>
  )
}

const MeetsiciansMobile = () => {
  const [indexCarousel1, setIndexCarousel1] = useState(0); // État d'index pour le premier carrousel
  const [indexCarousel2, setIndexCarousel2] = useState(0);

  const handleSelectCarousel1 = (selectedIndex, e) => {
    setIndexCarousel1(selectedIndex);
  };

  const handleSelectCarousel2 = (selectedIndex, e) => {
    setIndexCarousel2(selectedIndex);
  };

  return (
  <MeetsiciansPageMobile>
    <Mobileflex className="justify-content-around">
      <DescriptionContainerMobile>
        <FlexTitle>
          <Title>Meetsicians </Title>
          <Year>2023</Year>
        </FlexTitle>
        <Website href="https://www.meetsicians.fr" target="_blank">www.meetsicians.fr</Website>
        <DescriptionMobile>
          Pour notre projet final de formation au Wagon à Nantes,
          nous avons décidé de créer une application mobile permettant
          aux musiciens de trouver un groupe de musique proche
          de leur localisation. Cette application se nomme Meetsicians.
          <br/>
          Nous avons été réparti en groupe e travail de quatres.
          <br/>
          Pour cette application, j'ai créé l'UX-UI sur le
          logiciel Figma. J'ai également développé plusieurs fonctionnalités
          de l'application, que ce soit en front-end ou en back-end avec Ruby on Rails.
          L'application est toujours en cours de développement.
        </DescriptionMobile>
      </DescriptionContainerMobile>
      <PictureContainerMobile>
      <Carousel interval={null} activeIndex={indexCarousel1} onSelect={handleSelectCarousel1} indicators={false}>
        {data.map((slide, i) => {
          return (
          <Carousel.Item>
            <PictureMeetsiciansMobile className="d-block " src={slide.image} />
          </Carousel.Item>
        )
        })}
      </Carousel>
      </PictureContainerMobile>
    </Mobileflex>
    <DesktopDiv>
      <DescriptionMobileSub>
        <FlexTitle>
          <SubTitle>Mon interprétation desktop </SubTitle>
          <Year>2023</Year>
        </FlexTitle>
        <Website href="https://www.figma.com/file/2j9esnIc8nTD6Ee6hyZnku/Meetsicians?type=design&node-id=708-3651&mode=design&t=AvUrV7xwkD7uOkPy-0" target="_blank">www.figma.com</Website>
      </DescriptionMobileSub>
      <Flex>

      <PictureContainerDesktopMobile>
        <Carousel interval={null} activeIndex={indexCarousel2} onSelect={handleSelectCarousel2} indicators={false}>
          {dataDesktop.map((slide, i) => {
            return (
              <Carousel.Item>
                <PictureMeetsiciansMobileDesktop className="d-block " src={slide.imageDesktop} />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </PictureContainerDesktopMobile>
      </Flex>
    </DesktopDiv>
  </MeetsiciansPageMobile>
  )
}

const Meetsicians = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
    {isMobile ? <MeetsiciansMobile /> : <MeetsiciansDesktop />}
    </>
  );
};

export default Meetsicians;
