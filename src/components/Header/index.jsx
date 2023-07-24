import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BannerCurri from '../../assets/banner_curri.jpg'
// import { StyledLink } from '../../utils/style/Atoms'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={BannerCurri} />
      </Link>
      <div>
      <Link to="/">Curriculum Vitae</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact
        </Link>
      </div>
    </NavContainer>
  )
}

export default Header
