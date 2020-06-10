import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const Context = createContext();

export const PlanosContextProvider = props => {
  const dispatch = useDispatch();
  const { children } = props;
  const values = {};

  useEffect(() => {
    axios.get('https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/prices').then(response => {
      const { products } = response.data.shared;
      dispatch(products.setProducts(products));
    });
  }, []);

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
