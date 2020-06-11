import React from 'react';
import styled from 'styled-components';
import { PlanosContextProvider } from 'screens/main/context';
import Header from './blocks/header';
import FirstRow from './blocks/fristRow';
import SecondRow from './blocks/secondRow';
import Footer from './blocks/footer';

export default () => (
  <PlanosContextProvider>
    <Screen>
      <Header />
      <FirstRow />
      <SecondRow />
      <Footer />
    </Screen>
  </PlanosContextProvider>
);

const Screen = styled.div``;
