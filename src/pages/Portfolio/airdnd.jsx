import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
// import { useMediaQuery } from 'react-responsive';

const AirdndPage = styled.div`
  min-height: 100vh;
  width: 20%;
  position: sticky;
  top: 20px;
  background-color: ${colors.button}
`
const Airdnd = () => (
  <AirdndPage>

  </AirdndPage>
)

export default Airdnd;
