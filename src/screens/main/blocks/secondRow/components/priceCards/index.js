import React from 'react';
import { PlanosContextConsumer } from 'screens/main/context';
import styled from 'styled-components';
import * as colors from 'colors';
import { Card } from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { PlanImage } from 'images/planosImages';

export default () => (
  <PlanosContextConsumer>
    {context => {
      debugger;
      const imgs = PlanImage;
      return (
        context.allProducts.length > 0 && (
          <CarouselWrapper>
            <Carousel length={context.allProducts.length}>
              {context.allProducts.map(product => {
                return (
                  <ItemWrapper className="CarouselWrapper">
                    <img src={PlanImage[product.name]} alt={`Imagem de decoração do ${product.name}`} />
                    <Card>{product.name}</Card>
                  </ItemWrapper>
                );
              })}
            </Carousel>
          </CarouselWrapper>
        )
      );
    }}
  </PlanosContextConsumer>
);

const CarouselWrapper = styled.div`
  max-width: calc(100% - 26px);
  overflow: hidden;
  overflow: scroll;
  padding: 0px 13px;

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
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  opacity: 1;
  width: 266px;
`;
