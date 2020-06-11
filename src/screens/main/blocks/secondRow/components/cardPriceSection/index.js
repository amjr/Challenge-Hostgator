/* eslint-disable max-lines */
import React from 'react';
import { PlanosContextConsumer } from 'screens/main/context';
import styled from 'styled-components';
import * as colors from 'colors';
import { Typography, styled as MaterialStyled, Button } from '@material-ui/core';
import currencyFormatter from 'currency-formatter';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';

export const CardPriceSection = props => {
  const { product } = props;
  return (
    <PlanosContextConsumer>
      {context => (
        <CardPrices>
          <StyledPrice>
            <span>
              {currencyFormatter.format(product.cycle[context.paymentPeriod].priceOrder, {
                locale: 'pt-BR'
              })}
            </span>
            &nbsp;
            {currencyFormatter.format(
              product.cycle[context.paymentPeriod].priceOrder -
                (product.cycle[context.paymentPeriod].priceOrder * 40) / 100,
              { locale: 'pt-BR' }
            )}
          </StyledPrice>

          <StyledPerMonth>
            R$
            <span>
              {currencyFormatter.format(
                (product.cycle[context.paymentPeriod].priceOrder -
                  (product.cycle[context.paymentPeriod].priceOrder * 40) / 100) /
                  product.cycle[context.paymentPeriod].months,
                { locale: 'pt-BR', symbol: '' }
              )}
            </span>
            /mês*
          </StyledPerMonth>

          <BuyButton
            onClick={() => {
              window.location.href = `/?a=add&pid=${product.id}&billingcycle=${context.paymentPeriod}&promocode=PROMOHG40`;
            }}
          >
            Contrate Agora
          </BuyButton>

          <AnoGratis>
            1 ano de Domínio Grátis&nbsp;
            <StyledInfoIcon />
          </AnoGratis>

          <EconomizeRow>
            <EconomizeValor>
              economize{' '}
              {currencyFormatter.format((product.cycle[context.paymentPeriod].priceOrder * 40) / 100, {
                locale: 'pt-BR'
              })}{' '}
            </EconomizeValor>
            <EconomizePercentTag>40% OFF</EconomizePercentTag>
          </EconomizeRow>
        </CardPrices>
      )}
    </PlanosContextConsumer>
  );
};

CardPriceSection.propTypes = {
  image: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string
  }).isRequired,

  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    cycle: PropTypes.object
  }).isRequired
};

const CardPrices = styled.div`
  padding: 30px 15px 35px;
`;

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

const BuyButton = MaterialStyled(({ ...other }) => <Button {...other} />)({
  backgroundColor: `${colors.indigo} !important`,
  borderRadius: '26px',
  color: colors.white,
  fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
  fontSize: '22px',
  fontWeight: 700,
  height: '44px',
  lineHeight: '27px',
  marginBottom: '32px',
  marginTop: '25px',
  textTransform: 'capitalize',
  width: '229px'
});

const AnoGratis = MaterialStyled(({ ...other }) => <Typography {...other} />)({
  alignItems: 'center',
  color: colors.mineShaft,
  display: 'flex',
  fontSize: '15px',
  fontWeight: 700,
  justifyContent: 'center',
  lineHeight: '20px',
  marginBottom: '12px',
  textAlign: 'center'
});

const StyledInfoIcon = MaterialStyled(({ ...other }) => <InfoIcon {...other} />)({
  fill: `${colors.matisse} !important`,
  maxHeight: '15px',
  maxWidth: '15px'
});

const EconomizeRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const EconomizeValor = MaterialStyled(({ ...other }) => <Typography {...other} />)({
  alignItems: 'center',
  color: colors.matisse,
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '18px'
});

const EconomizePercentTag = styled.span`
  align-items: center;
  background-color: ${colors.puertoRico};
  border-radius: 224px;
  color: ${colors.white};
  display: flex;
  font-family: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 700;
  height: 23px;
  justify-content: center;
  line-height: 14px;
  margin-left: 8px;
  width: 80px;
`;

export default CardPriceSection;
