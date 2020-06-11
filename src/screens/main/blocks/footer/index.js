import React from 'react';
import styled from 'styled-components';
import * as colors from 'colors';
import { styled as MaterialStyled, Typography, Container } from '@material-ui/core';

export default () => (
  <FooterWrapper>
    <Container maxWidth="lg">
      <FooterText>*Confira as condições da promoção</FooterText>
    </Container>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  padding-top: 17px;
  padding-bottom: 30px;
  background-color: ${colors.linkWater};
`;

const FooterText = MaterialStyled(({ ...other }) => <Typography {...other} />)({
  color: colors.indigo,
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '12px',
  textAlign: 'center',

  '@media screen and (min-width: 1920px)': {
    textAlign: 'right'
  }
});
