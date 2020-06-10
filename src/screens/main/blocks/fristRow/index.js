/* eslint-disable max-lines */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import * as colors from 'colors';
import { Typography, styled as MaterialStyled, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LeftImage from 'images/first-row_left.svg';
import RightImage from 'images/first-row_right.svg';

export default () => (
  <>
    <FirstRowWrapper>
      <ImageWrapper>
        <img src={LeftImage} className="left" alt="Imagem de móveis em azul" />
      </ImageWrapper>

      <FirstRowText>
        <HeaderOne variant="h1">Hospedagem de Sites teste</HeaderOne>

        <HeaderTwo variant="h2">
          Tenha uma hospedagem de sites estável e evite perder <span>visitantes diariamente</span>
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
      </FirstRowText>

      <ImageWrapper>
        <img src={RightImage} className="right" alt="Imagem de móveis em azul" />
      </ImageWrapper>
    </FirstRowWrapper>

    <ButtonWrapper className="ButtonWrapper">
      <StyledIconButton>
        <ArrowDropDownIcon />
      </StyledIconButton>
    </ButtonWrapper>
  </>
);

const FirstRowWrapper = styled.div`
  align-items: center;
  background-color: ${colors.matisse};
  height: 320px;
  justify-content: center;
  overflow-y: hidden;
  padding: 0px 21px;
  position: relative;
  display: flex;

  @media screen and (min-width: 768px) {
    padding: 0px 15px;
    height: 380px;
  }

  @media screen and (min-width: 1920px) {
    overflow-y: unset;
  }

  ul {
    list-style-type: none;
    margin-left: auto;
    margin-right: auto;
    max-width: 210px;

    @media screen and (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 450px;
      width: 100%;

      li {
        width: 50%;
        display: flex;
        justify-content: center;
      }

      & li:first-child {
        width: 100%;

        p {
          width: 380px;
        }
      }
    }

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

const ImageWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1920px) {
    display: block;
  }

  .left {
    max-width: 484px;
  }

  .right {
    max-width: 439px;
  }

  .left,
  .right {
    margin-top: calc(83px + 50px);
    position: relative;
    z-index: 2;
  }
`;

const FirstRowText = styled.div`
  @media screen and (min-width: 1920px) {
    max-width: 650px;
    width: 100%;
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

  '@media screen and (max-width: 767px)': {
    '& span': {
      display: 'none'
    }
  },
  '@media screen and (min-width: 768px)': {
    fontSize: '30px',
    lineHeight: '45px',
    marginBottom: '32px'
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
  boxShadow: '2px 2px 5px 0px rgba(0,0,0,.40)',
  maxHeight: '32px',
  maxWidth: '32px',

  '& svg': {
    fill: colors.white
  }
});

const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: -16px;
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 39px;

  &:before {
    background-color: ${colors.matisse};
    border-radius: 100%;
    bottom: 9px;
    content: '';
    display: block;
    height: 50vh;
    position: absolute;
    width: 200vh;
  }

  @media screen and (min-width: 768px) {
    z-index: 1;

    &:before {
      bottom: 13px;
      width: 400vw;
      left: -166%;
    }
  }

  @media screen and (min-width: 1920px) {
    &:before {
      bottom: 10px;
      width: 600vh;
      left: unset;
    }

    &:after {
      background-color: ${colors.linkWater};
      border-radius: 100%;
      top: -45px;
      content: '';
      display: block;
      height: 50vh;
      position: absolute;
      width: 500vw;
      left: 0;
    }
  }
`;
