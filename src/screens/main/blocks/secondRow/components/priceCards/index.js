import React from 'react';
import { PlanosContextConsumer } from 'screens/main/context';
import styled from 'styled-components';
import * as colors from 'colors';
import { PlanImage } from 'images/planosImages';
import { find, propEq } from 'ramda';
import { Typography, styled as MaterialStyled } from '@material-ui/core';
import currencyFormatter from 'currency-formatter';

export default () => (
  <PlanosContextConsumer>
    {context => {
      const imgs = PlanImage;
      return (
        context.allProducts.length > 0 && (
          <CarouselWrapper>
            <Carousel length={context.allProducts.length}>
              {context.allProducts.map(product => {
                const image = find(propEq('name', product.name), imgs);
                return (
                  <ItemWrapper className="CarouselWrapper">
                    <Card>
                      <CardHeader>
                        <img src={image.img} alt={`Imagem de decoração do ${product.name}`} />
                        <StyledName>{product.name}</StyledName>
                      </CardHeader>

                      <Separator />

                      <CardPrices>
                        <StyledPrice>
                          <span>
                            {currencyFormatter.format(product.cycle.triennially.priceOrder, { locale: 'pt-BR' })}
                          </span>
                          &nbsp;
                          {currencyFormatter.format(
                            product.cycle.triennially.priceOrder - (product.cycle.triennially.priceOrder * 40) / 100,
                            { locale: 'pt-BR' }
                          )}
                        </StyledPrice>
                        <StyledPerMonth>
                          R$
                          <span>
                            {currencyFormatter.format(
                              (product.cycle.triennially.priceOrder -
                                (product.cycle.triennially.priceOrder * 40) / 100) /
                                product.cycle.triennially.months,
                              { locale: 'pt-BR', symbol: '' }
                            )}
                          </span>
                          /mês*
                        </StyledPerMonth>
                      </CardPrices>
                    </Card>
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
  margin-left: auto;
  margin-right: auto;
  opacity: 1;
`;

const Card = styled.div`
  width: 266px;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 34px 26px 0px;
  flex-direction: column;
`;

const Separator = styled.div`
  background-color: ${colors.solitude};
  height: 1px;
  width: 100%;
`;

const CardPrices = styled.div`
  padding: 30px 26px 36px;
`;

const StyledName = MaterialStyled(({ ...other }) => <Typography {...other} />)({
  color: colors.matisse,
  fontSize: '26px',
  fontWeight: 700,
  lineHeight: '26px',
  textAlign: 'center',
  marginTop: '10px',
  marginBottom: '27px'
});

const StyledPrice = MaterialStyled(({ ...other }) => <Typography {...other} />)({
  color: colors.mineShaft,
  fontSize: '13px',
  fontWeight: 700,
  lineHeight: '19px',
  textAlign: 'center',
  '& span': {
    fontWeight: 400,
    textDecoration: 'line-through'
  }
});

const StyledPerMonth = MaterialStyled(({ ...other }) => <Typography {...other} />)({
  color: colors.matisse,
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '24px',
  textAlign: 'center',
  '& span': {
    fontWeight: 700,
    fontSize: '35px'
  }
});
