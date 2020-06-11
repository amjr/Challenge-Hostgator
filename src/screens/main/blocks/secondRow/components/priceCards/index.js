import React from 'react';
import { PlanosContextConsumer } from 'screens/main/context';
import styled from 'styled-components';
import * as colors from 'colors';
import { PlanImage } from 'images/planosImages';
import { find, propEq } from 'ramda';
import { CustomCard } from '../customCard';
import { Container } from '@material-ui/core';

export default () => (
  <PlanosContextConsumer>
    {context => {
      const imgs = PlanImage;
      return (
        context.allProducts.length > 0 && (
          // <Container maxWidth="lg">
          <CarouselWrapper className="CarouselWrapper">
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
          // </Container>
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
  margin-left: auto;
  margin-right: auto;
  opacity: 1;
`;
