import React from 'react';
import styled from 'styled-components';
import * as colors from 'colors';
import { Typography, styled as MaterialStyled } from '@material-ui/core';
import PropTypes from 'prop-types';
import { CardPriceSection } from '../cardPriceSection';
import { CardInfoSection } from '../cardInfoSection';

export const CustomCard = props => {
  const { product, image } = props;
  return (
    <Card isFeatured={product.name === 'Plano M'}>
      <CardHeader>
        <img src={image.img} alt={`Imagem de decoração do ${product.name}`} />
        <StyledName>{product.name}</StyledName>
      </CardHeader>

      <Separator />

      <CardPriceSection product={product} />

      <Separator />

      <CardInfoSection product={product} />
    </Card>
  );
};

CustomCard.propTypes = {
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

const Card = styled.div`
  width: 266px;
  display: flex;
  flex-direction: column;
  &:before {
    content: '';
    height: 14px;
    width: 100%;
    background-color: ${props => (props.isFeatured ? `${colors.orange}` : 'transparent')};
    display: block;
    top: -15px;
    position: relative;
    border-radius: 4px 4px 0px 0px;
  }
  &:after {
    content: '';
    height: 5px;
    width: 100%;
    background-color: ${props => (props.isFeatured ? `${colors.orange}` : 'transparent')};
    display: block;
    top: 5px;
    position: relative;
    border-radius: 0px 0px 5px 5px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 34px 26px 0px;
  flex-direction: column;
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

const Separator = styled.div`
  background-color: ${colors.solitude};
  height: 1px;
  width: 100%;
`;

export default CustomCard;
