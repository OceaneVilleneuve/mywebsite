import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import colors from '../../utils/style/colors';
import { useMediaQuery } from 'react-responsive';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledLink = styled(Link)`
  font-family: 'Roboto Mono',monospace;
  font-size: 13px;
  padding: 7px;
  border: 0.5px solid black;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: ${props => props.$isActive ? "white" : "black"};
  background-color: ${props => props.$isActive ? colors.primary : "transparent"};
`
const StyledLinkMobile = styled(Link)`
font-family: 'Roboto Mono',monospace;
font-size: 9px;
padding: 7px;
border: 0.5px solid black;
width: 100%;
height: ${props => props.$isActive ? "32px" : "32px"};
text-align: center;
text-decoration: none;
color: ${props => props.$isActive ? "white" : "black"};
background-color: ${props => props.$isActive ? colors.primary : "transparent"};
`

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();

  return (
    <>
    {isMobile? (
      <NavContainer>
        <StyledLinkMobile $isActive={location.pathname==="/"} to="/">Curriculum Vitae</StyledLinkMobile>
        <StyledLinkMobile $isActive={location.pathname==="/portfolio"} to="/portfolio">Portfolio</StyledLinkMobile>
        <StyledLinkMobile $isActive={location.pathname==="/contact"} to="/contact">Contact et Réseaux</StyledLinkMobile>
      </NavContainer>
    ) : (
      <NavContainer>
        <StyledLink $isActive={location.pathname==="/"} to="/">Curriculum Vitae</StyledLink>
        <StyledLink $isActive={location.pathname==="/portfolio"} to="/portfolio">Portfolio</StyledLink>
        <StyledLink $isActive={location.pathname==="/contact"} to="/contact">Contact et Réseaux</StyledLink>
      </NavContainer>
    )}
    </>
  )
};

export default Navbar;
