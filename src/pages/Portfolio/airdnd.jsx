import styled from 'styled-components';
import colors from '../../utils/style/colors';
import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

const AirdndPage = styled.div`
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
const DescriptionAirdnd = styled.p`
  font-family: 'Roboto Mono',monospace;
  font-size: 12px;
  padding-top: 1em;
  margin-bottom: 5em;
`

const PictureAirdnd = styled.img`
  height: 28em;
  width: 53em;
  object-fit: cover;
`
const PictureAirdndDesktop = styled.div`
  width: 53em;
  display: flex;
  border: 0.5px solid black;
`
const TitleDescription = styled.p`
  font-family: 'Roboto Mono',monospace;
  text-decoration: none;
  font-weight: lighter;
  font-size: 13px;
  font-style: italic;
  color: ${colors.fourth};
`

const dataAirdnd = [
  { image: require('../../assets/airdndhome.png'), },
  { image:require('../../assets/airdndmenu.png'), },
  { image:require('../../assets/airdndmenubis.png'), },
  { image:require('../../assets/airdndtema.png'), },
  { image:require('../../assets/airdndteambis.png'), },
  { image:require('../../assets/airdndresa.png'), },
  { image:require('../../assets/airdndteam.png'), },
  { image:require('../../assets/contratairdnd.png'), },
  { image:require('../../assets/contratairdndaccept.png'), },
];

const Airdnd = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
  <AirdndPage>
    <DescriptionContainer>
      <Flex>
        <Title>Air DnD </Title>
        <Year>2023</Year>
      </Flex>
      <TitleDescription>Screenshot du site en environnement de développement</TitleDescription>
      <DescriptionAirdnd>
        Lors de ma formation au Wagon à Nantes, il nous a été demandé de créer un clone
        de l'application Airbnb.
        <br/>
        Nous étions répartis en groupes de quatre et avions pour tâche de créer un site
        de location en tous genres.
        <br/>
        Pour cette application, nous avons décidé de créer un site de location d'équipements
        épiques pour réaliser des donjons dans un univers fantastique. D'où l'appellation
        "Air DnD" pour Donjons et Dragons.
        Pour cette application, j'ai développé plusieurs fonctionnalités
        que ce soit en front-end ou en back-end avec Ruby on Rails.
      </DescriptionAirdnd>
    </DescriptionContainer>
    <PictureAirdndDesktop>
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect} indicators={false}>
      {dataAirdnd.map((slide, i) => {
        return (
        <Carousel.Item>
          <PictureAirdnd className="d-block " src={slide.image} />
        </Carousel.Item>
      )
      })}
    </Carousel>
    </PictureAirdndDesktop>
  </AirdndPage>
)}

export default Airdnd;
