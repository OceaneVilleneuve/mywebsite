import styled from 'styled-components';
import colors from '../../utils/style/colors';
import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

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

const Description = styled.p`
  font-family: 'Roboto Mono',monospace;
  font-size: 12px;
  padding-top: 3em;
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
  font-size: 14px;
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

const Meetsicians = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
  <MeetsiciansPage>
    <Flex className="justify-content-around">
      <DescriptionContainer>
        <Flex>
          <Title>Meetsicians </Title>
          <Year>2023</Year>
        </Flex>
        <Website href="https://www.meetsicians.fr" target="_blank">www.meetsicians.fr</Website>
        <Description>
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
        </Description>
      </DescriptionContainer>
      <PictureContainer>
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect} indicators={false}>
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
    <DesktopDiv>
        <DescriptionContainer className="mt-5">
          <Flex>
          <SubTitle>Mon interprétation en version desktop - FIGMA </SubTitle>
          <SubYear>2023</SubYear>
          </Flex>
          <Website href="https://www.figma.com/file/2j9esnIc8nTD6Ee6hyZnku/Meetsicians?type=design&node-id=708-3651&mode=design&t=AvUrV7xwkD7uOkPy-0" target="_blank">www.figma.com</Website>
          <div className="mt-5">
            <PictureContainerDesktop>
            <Carousel interval={null} activeIndex={index} onSelect={handleSelect} indicators={false}>
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
        </DescriptionContainer>
    </DesktopDiv>
  </MeetsiciansPage>
  )
}


export default Meetsicians;
