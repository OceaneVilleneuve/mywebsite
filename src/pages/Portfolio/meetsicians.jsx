
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

const MeetsiciansPage = styled.div`
  min-height: 100%;
  width: 100vh;
  margin-top: 19px;
  margin-left: 15px;
`
const Flex = styled.div`
  display: flex;
`

const DescriptionContainer =styled.div`
  width: 62%;
  margin-right: 3em;
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
  color: ${colors.third}
`
const Website = styled.a`
  font-family: 'Roboto Mono',monospace;
  text-decoration: none;
  font-weight: lighter;
  font-size: 13px;
  font-style: italic;
  color: ${colors.fourth}
`

const Description = styled.p`
  font-family: 'Roboto Mono',monospace;
  font-size: 12px;
  padding-top: 3em;
`
const PictureContainer = styled.div`
  width: 30%;
  display: flex;
`

const PictureMeetsicians = styled.img`
  height: 27em;
  width: 16em;
`

const data = [
  { image: require('../../assets/meetsicians_home.png'), },
  { image:require('../../assets/chat.png'), },
  { image:require('../../assets/conv.png'), },
  { image:require('../../assets/twentyprofil.png'), },
  { image:require('../../assets/meetsicians.png'), },
  { image:require('../../assets/meetsicians_filters.png'), },
  { image:require('../../assets/members.png'), },
  { image:require('../../assets/profil.png'), },
];

const Meetsicians = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
  <MeetsiciansPage>
    <Flex>
      <DescriptionContainer>
        <Flex>
          <Title>Meetsicians </Title>
          <Year>2023</Year>
        </Flex>
        <Website href="https://www.meetsicians.fr" target="_blank">www.meetsicians.fr</Website>
        <Description>
          Pour notre projet final de formation au wagon de Nantes
          nous avons décidé de créer une application mobile permettant
          aux musiciens de trouver un groupe de musique proche de
          leur localisation.
          <br/>
          Pour cette application j’ai créer l’UX-UI sur le
          logiciel figma. J’ai aussi développer plusieurs features
          de l’application que ce soit en front ou en back.
          L’application est toujours en cours de développement.
        </Description>
      </DescriptionContainer>
      <PictureContainer>
      <Carousel activeIndex={index} onSelect={handleSelect}>
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
  </MeetsiciansPage>
  )

    }


export default Meetsicians;
