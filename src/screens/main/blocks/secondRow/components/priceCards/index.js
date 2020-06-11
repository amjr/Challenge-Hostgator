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
// import { Container, IconButton } from '@material-ui/core';

export default () => {
  return (
    <PlanosContextConsumer>
      {context => {
        const imgs = PlanImage;

        return (
          context.allProducts.length > 0 && (
            // <Container maxWidth="lg">
            <PriceCardsWarpper>
              <NavButton onClick={() => context.scrollTo(-context.width)} className="leftArrow">
                <ArrowBackIosIcon />
              </NavButton>

              <CarouselWrapper className="CarouselWrapper" ref={context.carouselRef}>
                <Carousel length={context.allProducts.length}>
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

              <NavButton onClick={() => context.scrollTo(context.width)} className="rightArrow">
                <ArrowForwardIosIcon />
              </NavButton>
            </PriceCardsWarpper>
            // </Container>
          )
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
  max-width: calc(100% - 26px);
  overflow: hidden;
  overflow: scroll;
  padding: 0px 13px;
  position: relative;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const Carousel = styled.div`
  display: flex;
  width: calc(${props => props.length * 266}px + 26px + 26px);
`;

const ItemWrapper = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  border: 1px solid ${colors.solitude};
  margin-left: auto;
  margin-right: auto;
  opacity: 1;
`;

const NavButton = MaterialStyled(({ ...other }) => <IconButton {...other} />)({
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
    left: '2px',
    '& svg': {
      marginLeft: '8px'
    }
  },

  '&.rightArrow': {
    right: '2px',
    '& svg': {
      marginLeft: '3px'
    }
  },

  '& svg': {
    fill: colors.white
  }
});
