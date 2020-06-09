import React from 'react';
import styled from 'styled-components';
import { PlanosContextProvider } from 'screens/main/context';
import Header from './blocks/header';
import FirstRow from './blocks/fristRow';

export default () => (
  <PlanosContextProvider>
    <Screen>
      <Header />
      <FirstRow />
    </Screen>
  </PlanosContextProvider>
);

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
`;
