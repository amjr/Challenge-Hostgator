import React from 'react';
import styled from 'styled-components';
import * as colors from 'colors';
import { Typography, styled as MaterialStyled, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default () => (
  <FirstRowWrapper>
    <HeaderOne variant="h1">Hospedagem de Sites teste</HeaderOne>
    <HeaderTwo variant="h2">
      Tenha uma
      <br />
      hospedagem de sites estável e evite perder <span>visitantes diariamente</span>
    </HeaderTwo>
    <ul>
      <li>
        <ListItem>99,9% de disponibilidade: seu site sempre no ar</ListItem>
      </li>
      <li>
        <ListItem>Suporte 24h, todos os dias</ListItem>
      </li>
      <li>
        <ListItem>Painel de Controle cPanel</ListItem>
      </li>
    </ul>

    <StyledIconButton>
      <ArrowDropDownIcon />
    </StyledIconButton>
  </FirstRowWrapper>
);

const FirstRowWrapper = styled.div`
  align-items: center;
  background-color: ${colors.matisse};
  height: 320px;
  justify-content: center;
  padding: 0px 15px;
  position: relative;

  ul {
    list-style-type: none;

    li {
      p {
        width: 205px;
        position: relative;

        &:before {
          position: absolute;
          top: calc(50% - 10px);
          border: solid white;
          border-width: 0 2px 2px 0;
          content: '';
          display: inline-block;
          height: 12px;
          margin-right: 10px;
          transform: rotate(45deg);
          width: 4px;
          left: -8px;
        }
      }
    }
  }
`;

const HeaderOne = MaterialStyled(({ ...other }) => <Typography {...other} />)({
  color: colors.spindle,
  fontSize: '16px',
  letterSpacing: 1.6,
  lineHeight: '27px',
  marginBottom: '12px',
  marginTop: '32px',
  textAlign: 'center',
  fontWeight: 600
});

const HeaderTwo = MaterialStyled(({ ...other }) => <Typography {...other} />)({
  color: colors.white,
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
  marginBottom: '33px',
  textAlign: 'center',

  '@media screen and (max-width: 768px)': {
    '& span': {
      display: 'none'
    }
  }
});

const ListItem = MaterialStyled(({ ...other }) => <Typography {...other} />)({
  color: colors.spindle,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '20px',
  margin: '0 !important',
  marginBottom: '33px',
  textAlign: 'center'
});

const StyledIconButton = MaterialStyled(({ ...other }) => <IconButton {...other} />)({
  backgroundColor: colors.indigo,
  bottom: '-16px',
  boxShadow: '2px 2px 5px 0px rgba(0,0,0,.40)',
  left: ' calc(50% - 32px)',
  maxHeight: '32px',
  maxWidth: '32px',
  position: 'absolute',

  '& svg': {
    fill: colors.white
  }
});
