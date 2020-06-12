import React from 'react';
import styled from 'styled-components';
import * as colors from 'colors';
import { Typography, styled as MaterialStyled } from '@material-ui/core';
import PropTypes from 'prop-types';

export const CardInfoSection = props => {
  const { product } = props;
  return (
    <CardInfo>
      <ProductInfo>
        <span>{product.name === 'Plano P' ? 'Para 1 site' : 'Sites Ilimitados'}</span>
      </ProductInfo>

      <ProductInfo>
        <span>
          <b>{product.name === 'Plano Turbo' ? '150' : '100'} GB</b> de Armazenamento
        </span>
      </ProductInfo>

      <ProductInfo>
        <span>
          Contas de E-mail <b>Ilimitadas</b>
        </span>
      </ProductInfo>

      <ProductInfo>
        <span>
          Criador de Sites{' '}
          <b>
            <u>Grátis</u>
          </b>
        </span>
      </ProductInfo>

      <ProductInfo>
        <span>
          Certificado SSL <b>Grátis</b> (HTTPS)
        </span>
      </ProductInfo>
    </CardInfo>
  );
};

CardInfoSection.propTypes = {
  image: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string
  }),

  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    cycle: PropTypes.object
  })
};

CardInfoSection.defaultProps = {
  image: PropTypes.shape({
    img: '',
    name: ''
  }),

  product: PropTypes.shape({
    id: 1,
    name: '',
    cycle: {}
  })
};

const CardInfo = styled.div`
  padding: 32px 15px 35px;

  & p:nth-child(1),
  & p:nth-child(3) {
    & span {
      border-bottom: 1px dashed ${colors.pigeonPost};
      padding-bottom: 5px;
    }
  }
`;

const ProductInfo = MaterialStyled(({ ...other }) => <Typography {...other} />)({
  color: colors.mineShaft,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '32px',
  textAlign: 'left',
  margin: '0px'
});

export default CardInfoSection;
