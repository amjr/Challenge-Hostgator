import React from 'react';
import { PlanosContextConsumer } from 'screens/main/context';
import styled from 'styled-components';
import * as colors from 'colors';
import { PlanImage } from 'images/planosImages';
import { find, propEq } from 'ramda';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { styled as MaterialStyled, IconButton } from '@material-ui/core';
import { CustomCard } from '../customCard';

export default () => {
  return (
    <PlanosContextConsumer>
      {context => {
        const imgs = PlanImage;
        return (
          <PriceCardsWarpper>
            {context.allProducts.length > 0 && (
              <>
                <NavButton onClick={() => context.scrollTo((266 + 14) * -1)} className="leftArrow">
                  <ArrowBackIosIcon />
                </NavButton>

                <CarouselWrapper className="CarouselWrapper" ref={context.carouselRef}>
                  <Carousel length={context.allProducts.length} className="Carousel" windowWidth={context.width}>
                    {context.allProducts.map(product => {
                      const image = find(propEq('name', product.name), imgs);
                      return (
                        <ItemWrapper className="ItemWrapper">
                          <CustomCard product={product} image={image} />
                        </ItemWrapper>
                      );
                    })}
                  </Carousel>
                </CarouselWrapper>

                <NavButton onClick={() => context.scrollTo(266 + 14)} className="rightArrow">
                  <ArrowForwardIosIcon />
                </NavButton>
              </>
            )}
          </PriceCardsWarpper>
        );
      }}
    </PlanosContextConsumer>
  );
};

const PriceCardsWarpper = styled.div`
  position: relative;
  max-width: 100%;
`;

const CarouselWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  overflow: scroll;
  position: relative;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const Carousel = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: calc(${props => props.length * 268}px + ${props => props.length * 10}px + 42px);
  padding: 14px 0px 5px 0px;

  & > div {
    margin: 0px 5px;
  }

  & > div:first-child {
    margin-left: 26px;
  }

  & > div:last-child {
    margin-right: 26px;
  }
`;

const ItemWrapper = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  border: 1px solid ${colors.solitude};
  opacity: 1;
`;

const NavButton = MaterialStyled(({ itemsWidth, windowWidth, ...other }) => <IconButton {...other} />)({
  width: '35px',
  height: '35px',
  backgroundColor: `${colors.matisse} !important`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 'calc(50%)',
  zIndex: 99,

  '&.leftArrow': {
    left: '5px',
    '& svg': {
      marginLeft: '8px'
    }
  },

  '&.rightArrow': {
    right: '5px',
    '& svg': {
      marginLeft: '3px'
    }
  },

  '& svg': {
    fill: colors.white
  },

  '@media screen and (min-width: 870px)': {
    display: 'none'
  }
});
