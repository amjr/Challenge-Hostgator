import React from 'react';
import styled from 'styled-components';
import logo from 'images/hostgator-logo.svg';
import * as colors from 'colors';
import { Container } from '@material-ui/core';

export default () => (
  <HeaderWrapper>
    <Container maxWidth="lg">
      <img src={logo} alt="Logo da hostgator" />
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.heather};
  display: flex;
  flex: 1;
  justify-content: flex-start;
  max-height: 51px;
  min-height: 51px;
  padding: 0px 15px;
  top: 0px;
`;
