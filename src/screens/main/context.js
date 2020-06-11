import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import * as productsActions from 'store/products/actions';

const Context = createContext();

export const PlanosContextProvider = props => {
  const dispatch = useDispatch();
  const { children } = props;
  const allProducts = useSelector(state => state.products.allProducts);
  const [paymentPeriod, setPaymentPeriod] = useState('triennially');
  const [paymentOptions, setPaymentOptions] = useState([
    { value: 'triennially', label: '3 anos' },
    { value: 'annually', label: '1 ano' },
    { value: 'monthly', label: '1 mês' }
  ]);

  useEffect(() => {
    axios.get('https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/prices').then(response => {
      const productArray = [];
      const { products } = response.data.shared;
      Object.values(products).forEach(product => {
        productArray.push(product);
      });
      dispatch(productsActions.setProducts(productArray));
    });
  }, []);

  const values = {
    allProducts,
    paymentPeriod,
    setPaymentPeriod,
    paymentOptions,
    setPaymentOptions
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

PlanosContextProvider.propTypes = {
  children: PropTypes.node
};

PlanosContextProvider.defaultProps = {
  children: null
};

export const PlanosContextConsumer = Context.Consumer;
export default PlanosContextProvider;
