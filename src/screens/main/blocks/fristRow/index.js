import React from 'react';
import styled from 'styled-components';
import * as colors from 'colors';
import Typography from 'components/Typography';

export default () => (
  <FirstRowWrapper>
    <Typography>Hospedagem de Sites teste</Typography>
  </FirstRowWrapper>
);

const FirstRowWrapper = styled.div`
  background-color: ${colors.matisse};
  height: 320px;
`;
