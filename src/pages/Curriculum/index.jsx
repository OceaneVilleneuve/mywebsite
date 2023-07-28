import React from 'react'
import styled from 'styled-components'
import LevelEnglish from '../../assets/level_english.png'
import LevelFrench from '../../assets/level_french.png';

const PageCurri = styled.div`
  min-height: 100vh;
`
const Bio = styled.p`
  font-family: 'Space Mono',monospace;
  font-size: 11px;
  text-align: center;
  margin: 40px 93px 23px;
`
const FlexContainer = styled.div`
  display: flex;
`
const ColumnContainer = styled.div`
  display: column;
`

const TitleCurriculum = styled.div`
  background-color: #CDBACE;
  font-family: 'Space Mono',monospace;
  font-size: 10px;
  padding: 5px;
  margin: 19px 4em 19px 4em;
  width: 38em;
  text-align: center;
`
const TextCurriculum = styled.p`
  font-family: 'Roboto Mono',monospace;
  font-size: 8px;
  margin-left: 6em;
  margin-right: 6em;
`
const PuceText = styled.li`
  font-family: 'Roboto Mono',monospace;
  font-size: 8px;
  font-style: italic;
  margin-right: 6em;
`

const LanguageLevelEnglish = styled.img`
  width: 45px;
  margin-left: 33em;
  margin-top: -4px;
`
const LanguageLevelFrench = styled.img`
  width: 43px;
  margin-left: 258PX;
  margin-top: -4px;
`

const Curriculum = () => (
  <PageCurri>
    <Bio>
      Désirant réorienter ma carrière dans le développement web Front-end,je viens d'achever le bootcamp du Wagon à
      Nantes. Je recherche mon premier emploi afin de pouvoir mettre en pratique mes compétences et accroître mes
      qualifications.
    </Bio>
    <FlexContainer>
      <ColumnContainer>
        <TitleCurriculum>FORMATIONS</TitleCurriculum>
        <TextCurriculum>
          <b>Concepteur développeur d’application web,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Le Wagon, 2023 </span>
          <br/>
          <span style={{color: "#393939"}}>Nantes, France</span>
          <ul>
              <PuceText>Titre RNCP Niveau 6</PuceText>
          </ul>
          <b>Baccalrauréat litteraire option anglais renforcée,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Lycée Léonard de Vinci, 2014 </span>
          <br/>
          <span style={{color: "#393939"}}>Monatigu, France</span>
        </TextCurriculum>
        <TitleCurriculum>PROJETS</TitleCurriculum>
        <TextCurriculum>
          <b>Meetsicians,</b>
          <br/>
          <span style={{color: "#536289", fontStyle: "italic"}}>07/2023</span>
            <ul>
                <PuceText>Création, développement et production d'une
                  application web qui connecte les musiciens avec des
                  groupes de musique. www.meetsicians.fr
                </PuceText>
            </ul>
            <b>Air DnD,</b>
            <br/>
            <span style={{color: "#536289", fontStyle: "italic"}}>07/2023</span>
            <ul>
                <PuceText>Création et développement d'un clone de
                  l'application air BnB.
                </PuceText>
            </ul>
        </TextCurriculum>
        <TitleCurriculum>COMPETENCES</TitleCurriculum>
        <TextCurriculum>
          <span style={{fontStyle: "italic"}}>Ruby on rails • JavaScript • REACT • HTML • CSS • ActiveRecords • PostegreSQL</span>
        </TextCurriculum>
        <TitleCurriculum>LOISIRS</TitleCurriculum>
        <TextCurriculum>
          <b>Musique</b> ( Chant, Basse, Composition )
          <br/>
          <b>Sport</b> ( Musculation )
        </TextCurriculum>
      </ColumnContainer>
      <ColumnContainer>
        <TitleCurriculum>EXPERIENCES PROFESSIONNELLES RECENTES</TitleCurriculum>
        <TextCurriculum>
          <b>Développeur Full-Stack,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Meetsicians, Air DnD </span>
          <br/>
          <span style={{color: "#536289"}}>07/2023 </span>
          <span style={{color: "#393939"}}>| Nantes, France</span>
          <ul>
              <PuceText>Wireframe et design complet sur Figma. </PuceText>
              <PuceText>Développement front-end : CSS, HTML, SASS et JavaScript. </PuceText>
              <PuceText>Développement back-end : PostgreSQL, Ruby on Rails, ActiveRecord. </PuceText>
              <PuceText>Création d'une base de données. </PuceText>
              <PuceText>Pair programming. </PuceText>
              <PuceText>Création, développement et production d'une application.  </PuceText>
          </ul>
          <b>Factrice,</b> <span style={{color: "#536289", fontStyle: "italic"}}>Adecco Industrie </span>
          <br/>
          <span style={{color: "#536289"}}>08/2018 </span>
          <span style={{color: "#393939"}}>| Vertou, France</span>
          <ul>
              <PuceText>Organisation du circuit de livraison.</PuceText>
              <PuceText>Relation client.  </PuceText>
              <PuceText>Gestion des livraisons. </PuceText>
          </ul>
          <b>Livreuse Polyvalente,</b> <span style={{color: "#536289", fontStyle: "italic"}}> Dominos Pizza </span>
          <br/>
          <span style={{color: "#536289"}}>09/2016 - 08/2018 </span>
          <span style={{color: "#393939"}}>| Orvault, France</span>
          <ul>
              <PuceText>Relation client.</PuceText>
              <PuceText>Organisation et gestion des livraisons. </PuceText>
          </ul>
        </TextCurriculum>
        <TitleCurriculum>LANGUAGES</TitleCurriculum>
        <TextCurriculum>
          <b>Anglais</b>
          <LanguageLevelEnglish src={LevelEnglish}/>
          <br/>
          C1
        </TextCurriculum>
        <TextCurriculum>
          <b>Français</b>
          <LanguageLevelFrench src={LevelFrench}/>
          <br/>
          Native
        </TextCurriculum>
      </ColumnContainer>
    </FlexContainer>
  </PageCurri>
)

export default Curriculum;
