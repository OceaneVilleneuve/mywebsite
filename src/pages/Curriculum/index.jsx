import React from 'react';
import styled from 'styled-components';
import LevelEnglish from '../../assets/level_english.png';
import LevelFrench from '../../assets/level_french.png';
import colors from '../../utils/style/colors';
import { useMediaQuery } from 'react-responsive';

const Bio = styled.p`
  font-family: 'Space Mono',monospace;
  font-size: 13px;
  text-align: center;
  margin: 61px 93px 17px;
`
const BioMobile = styled.p`
font-family: 'Space Mono',monospace;
font-size: 12px;
text-align: center;
margin: 31px 14px 17px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ColumnContainer = styled.div`
  width: 50%;
  padding: 27px 45px;
`
const ColumnContainerMobile = styled.div`
  width: 100%;
  padding: 4px 28px;
`

const TitleCurriculum = styled.div`
  background-color: ${colors.title};
  font-family: 'Space Mono',monospace;
  font-size: 12px;
  padding: 5px;
  margin: 19px 0;
  width: 100%;
  text-align: center;
  import { useMediaQuery } from 'react-responsive';
`
const TextCurriculum = styled.div`
  font-family: 'Roboto Mono',monospace;
  font-size: 12px;
  margin-left: 2em;
  margin-bottom: 3em;
  margin-right: 2em;
`
const PuceText = styled.li`
  font-family: 'Roboto Mono',monospace;
  font-size: 12px;
  font-style: italic;
  margin-right: 6em;
`

const LanguageLevelEnglish = styled.img`
  width: 45px;
  margin-left: 24em;
  margin-top: -4px;
`
const LanguageLevelEnglishMobile = styled.img`
  width: 45px;
  margin-left: 21em;
  margin-top: -4px;
`

const LanguageLevelFrench = styled.img`
  width: 43px;
  margin-left: 282px;
  margin-top: -4px;
`
const LanguageLevelFrenchMobile = styled.img`
  width: 43px;
  margin-left: 253px;
  margin-top: -4px;
`

const DesktopCurriculum = () => {
  return (
    <div>
      <Bio>
        Désirant réorienter ma carrière dans le développement web Front-end,je viens d'achever le bootcamp du Wagon à
        Nantes. Je recherche mon premier emploi afin de pouvoir mettre en pratique mes compétences et accroître mes
        qualifications.
      </Bio>
      <FlexContainer>
        <ColumnContainer>
          <TitleCurriculum>FORMATIONS</TitleCurriculum>
          <TextCurriculum>
            <p>
              <b>Concepteur développeur d’application web,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Le Wagon, 2023 </span>
              <br/>
              <span style={{color: "#393939"}}>Nantes, France</span>
            </p>
            <ul>
                <PuceText>Titre RNCP Niveau 6</PuceText>
            </ul>
            <p>
              <b>Baccalrauréat litteraire option anglais renforcée,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Lycée Léonard de Vinci, 2014 </span>
              <br/>
              <span style={{color: "#393939"}}>Montaigu, France</span>
            </p>
          </TextCurriculum>
          <TitleCurriculum>PROJETS</TitleCurriculum>
          <TextCurriculum>
            <p>
              <b>Meetsicians,</b>
              <br/>
              <span style={{color: "#536289", fontStyle: "italic"}}>07/2023</span>
            </p>
              <ul>
                  <PuceText>Création, développement et production d'une
                    application web qui connecte les musiciens avec des
                    groupes de musique. www.meetsicians.fr
                  </PuceText>
              </ul>
              <p>
                <b>Air DnD,</b>
                <br/>
                <span style={{color: "#536289", fontStyle: "italic"}}>07/2023</span>
              </p>
              <ul>
                  <PuceText>Création et développement d'un clone de
                    l'application Airbnb.
                  </PuceText>
              </ul>
          </TextCurriculum>
          <TitleCurriculum>COMPETENCES</TitleCurriculum>
          <TextCurriculum>
            <p>
              <span style={{fontStyle: "italic"}}>Ruby on rails • JavaScript • REACT • HTML • CSS • ActiveRecords • PostegreSQL</span>
            </p>
          </TextCurriculum>
          <TitleCurriculum>LOISIRS</TitleCurriculum>
          <TextCurriculum>
            <p>
              <b>Musique</b> ( Chant, Basse, Composition )
              <br/>
              <b>Sport</b> ( Musculation )
            </p>
          </TextCurriculum>
        </ColumnContainer>
        <ColumnContainer>
          <TitleCurriculum>EXPERIENCES PROFESSIONNELLES RECENTES</TitleCurriculum>
          <TextCurriculum>
            <p>
              <b>Développeur Full-Stack,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Meetsicians, Air DnD </span>
              <br/>
              <span style={{color: "#536289"}}>07/2023 </span>
              <span style={{color: "#393939"}}>| Nantes, France</span>
            </p>
            <ul>
              <PuceText>Wireframe et design complet sur Figma. </PuceText>
              <PuceText>Développement front-end : CSS, HTML, SASS et JavaScript. </PuceText>
              <PuceText>Développement back-end : PostgreSQL, Ruby on Rails, ActiveRecord. </PuceText>
              <PuceText>Création d'une base de données. </PuceText>
              <PuceText>Pair programming. </PuceText>
              <PuceText>Création, développement et production d'une application.  </PuceText>
            </ul>
            <p>
              <b>Factrice,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Adecco Industrie </span>
              <br/>
              <span style={{color: "#536289"}}>08/2018 </span>
              <span style={{color: "#393939"}}>| Vertou, France</span>
            </p>
            <ul>
                <PuceText>Organisation du circuit de livraison.</PuceText>
                <PuceText>Relation client.  </PuceText>
                <PuceText>Gestion des livraisons. </PuceText>
            </ul>
            <p>
              <b>Livreuse Polyvalente,</b> <span style={{color: "#536289", fontStyle: "italic"}}> Dominos Pizza </span>
              <br/>
              <span style={{color: "#536289"}}>09/2016 - 08/2018 </span>
              <span style={{color: "#393939"}}>| Orvault, France</span>
            </p>
            <ul>
                <PuceText>Relation client.</PuceText>
                <PuceText>Organisation et gestion des livraisons. </PuceText>
            </ul>
          </TextCurriculum>
          <TitleCurriculum>LANGUAGES</TitleCurriculum>
          <TextCurriculum>
            <p>
              <b>Anglais</b>
              <LanguageLevelEnglish src={LevelEnglish}/>
              <br/>
              C1
            </p>
          </TextCurriculum>
          <TextCurriculum>
            <p>
              <b>Français</b>
              <LanguageLevelFrench src={LevelFrench}/>
              <br/>
              Native
            </p>
          </TextCurriculum>
        </ColumnContainer>
      </FlexContainer>
    </div>
  )
}

const MobileCurriculum = () => {
  return (
    <div>
      <BioMobile>
        Désirant réorienter ma carrière dans le développement web Front-end,je viens d'achever le bootcamp du Wagon à
        Nantes. Je recherche mon premier emploi afin de pouvoir mettre en pratique mes compétences et accroître mes
        qualifications.
      </BioMobile>
      <FlexContainer>
        <ColumnContainerMobile>
          <TitleCurriculum>FORMATIONS</TitleCurriculum>
          <TextCurriculum>
            <p>
              <b>Concepteur développeur d’application web,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Le Wagon, 2023 </span>
              <br/>
              <span style={{color: "#393939"}}>Nantes, France</span>
            </p>
            <ul>
                <PuceText>Titre RNCP Niveau 6</PuceText>
            </ul>
            <p>
              <b>Baccalrauréat litteraire option anglais renforcée,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Lycée Léonard de Vinci, 2014 </span>
              <br/>
              <span style={{color: "#393939"}}>Monatigu, France</span>
            </p>
          </TextCurriculum>
          <TitleCurriculum>PROJETS</TitleCurriculum>
          <TextCurriculum>
            <p>
              <b>Meetsicians,</b>
              <br/>
              <span style={{color: "#536289", fontStyle: "italic"}}>07/2023</span>
            </p>
              <ul>
                  <PuceText>Création, développement et production d'une
                    application web qui connecte les musiciens avec des
                    groupes de musique. www.meetsicians.fr
                  </PuceText>
              </ul>
              <p>
                <b>Air DnD,</b>
                <br/>
                <span style={{color: "#536289", fontStyle: "italic"}}>07/2023</span>
              </p>
              <ul>
                  <PuceText>Création et développement d'un clone de
                    l'application air BnB.
                  </PuceText>
              </ul>
          </TextCurriculum>
          <TitleCurriculum>COMPETENCES</TitleCurriculum>
          <TextCurriculum>
            <p>
              <span style={{fontStyle: "italic"}}>Ruby on rails • JavaScript • REACT • HTML • CSS • ActiveRecords • PostegreSQL</span>
            </p>
          </TextCurriculum>
          <TitleCurriculum>LOISIRS</TitleCurriculum>
          <TextCurriculum>
            <p>
              <b>Musique</b> ( Chant, Basse, Composition )
              <br/>
              <b>Sport</b> ( Musculation )
            </p>
          </TextCurriculum>
        </ColumnContainerMobile>
        <ColumnContainerMobile>
          <TitleCurriculum>EXPERIENCES PROFESSIONNELLES RECENTES</TitleCurriculum>
          <TextCurriculum>
            <p>
              <b>Développeur Full-Stack,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Meetsicians, Air DnD </span>
              <br/>
              <span style={{color: "#536289"}}>07/2023 </span>
              <span style={{color: "#393939"}}>| Nantes, France</span>
            </p>
            <ul>
              <PuceText>Wireframe et design complet sur Figma. </PuceText>
              <PuceText>Développement front-end : CSS, HTML, SASS et JavaScript. </PuceText>
              <PuceText>Développement back-end : PostgreSQL, Ruby on Rails, ActiveRecord. </PuceText>
              <PuceText>Création d'une base de données. </PuceText>
              <PuceText>Pair programming. </PuceText>
              <PuceText>Création, développement et production d'une application.  </PuceText>
            </ul>
            <p>
              <b>Factrice,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Adecco Industrie </span>
              <br/>
              <span style={{color: "#536289"}}>08/2018 </span>
              <span style={{color: "#393939"}}>| Vertou, France</span>
            </p>
            <ul>
                <PuceText>Organisation du circuit de livraison.</PuceText>
                <PuceText>Relation client.  </PuceText>
                <PuceText>Gestion des livraisons. </PuceText>
            </ul>
            <p>
              <b>Livreuse Polyvalente,</b> <span style={{color: "#536289", fontStyle: "italic"}}> Dominos Pizza </span>
              <br/>
              <span style={{color: "#536289"}}>09/2016 - 08/2018 </span>
              <span style={{color: "#393939"}}>| Orvault, France</span>
            </p>
            <ul>
                <PuceText>Relation client.</PuceText>
                <PuceText>Organisation et gestion des livraisons. </PuceText>
            </ul>
          </TextCurriculum>
          <TitleCurriculum>LANGUAGES</TitleCurriculum>
          <TextCurriculum>
            <p>
              <b>Anglais</b>
              <LanguageLevelEnglishMobile src={LevelEnglish}/>
              <br/>
              C1
            </p>
          </TextCurriculum>
          <TextCurriculum>
            <p>
              <b>Français</b>
              <LanguageLevelFrenchMobile src={LevelFrench}/>
              <br/>
              Native
            </p>
          </TextCurriculum>
        </ColumnContainerMobile>
      </FlexContainer>
    </div>
  )
}

const Curriculum = () => {
   // Define breakpoints for responsiveness
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
    {isMobile ? <MobileCurriculum /> : <DesktopCurriculum />}
    </>
  );
};

export default Curriculum;
