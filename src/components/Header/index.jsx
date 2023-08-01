import styled from 'styled-components'
import BannerCurri from '../../assets/banner_curri.jpg'
import ProfilPicture from '../../assets/profil_picture.jpg'
import Portfolio from '../../assets/portfolio.jpg'
import Contact from '../../assets/contact.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

const Column = styled.div`
  display: column;
`

const HomeBanner = styled.div`
  background-image: url(${(props) => props.$bannerUrl});
  background-size: cover;
  height: 9em;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  font-family: 'Pinyon Script',cursive;
  color: black;
  font-size: 39px;
  font-weight: normal;
  padding-top: 46px;
  padding-left: 67px;
`

const TitleDescription = styled.div`
  font-family: 'Space Mono',monospace;
  padding-left: 67px;
  font-size: 10px;
`

const Picture = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 100px;
  object-fit: cover;
  margin-top: 37px;
  margin-right: 67px;
`
const FlexFaAndCity = styled.div`
  display: flex;
  margin-left: -6px;
  margin-top: 3px;
`

const City = styled.div`
  font-family: 'Roboto Mono',monospace;
  font-size: 9px;
  margin-left: 3px;
`
const Location = styled.div `
  margin-left: 1em;
  font-size: 12px;
`

const Header=() => {
  const location = useLocation();

  const getBackgroundPicture = (pathname) => {
    if (pathname==="/contact") {
      return Contact;
    }
    if (pathname==="/portfolio") {
      return Portfolio;
    }
      return BannerCurri;
  }

  return (
  <HomeBanner $bannerUrl={getBackgroundPicture(location.pathname)}>
    <Column>
      <Logo>Océane Villeneuve</Logo>
      <TitleDescription>Développeuse web Full-stack junior</TitleDescription>
    </Column>
    <Column>
      <Picture src={ProfilPicture}/>
      <FlexFaAndCity>
        <Location>
        <FaLocationDot icon="fas fa-map-marker-alt" />
        </Location>
        <City>NANTES</City>
      </FlexFaAndCity>
    </Column>
  </HomeBanner>
  )
};

export default Header
