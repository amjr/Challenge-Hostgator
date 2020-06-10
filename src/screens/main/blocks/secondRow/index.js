import React from 'react';
import styled from 'styled-components';
import * as colors from 'colors';
import RadioSelection from './components/radioSelection';
import PriceCards from './components/priceCards';

export default () => {
  return (
    <SecondRowWrapper>
      <RadioSelection />
      <PriceCards />
    </SecondRowWrapper>
  );
};

const SecondRowWrapper = styled.div`
  background-color: ${colors.linkWater};
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
`;
