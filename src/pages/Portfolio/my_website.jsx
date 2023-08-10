import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
// import { useMediaQuery } from 'react-responsive';

const MyWebsitePage = styled.div`
  min-height: 100vh;
  width: 20%;
  position: sticky;
  top: 20px;
  background-color: ${colors.third}
`
const MyWebsite = () => (
  <MyWebsitePage>

  </MyWebsitePage>
)

export default MyWebsite;
