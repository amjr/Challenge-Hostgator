import React from 'react';
import styled from 'styled-components';
import { PlanosContextProvider } from 'screens/main/context';
import Header from './blocks/header';
import FirstRow from './blocks/fristRow';
import SecondRow from './blocks/secondRow';

export default () => (
  <PlanosContextProvider>
    <Screen>
      <Header />
      <FirstRow />
      <SecondRow />
    </Screen>
  </PlanosContextProvider>
);

const Screen = styled.div``;
