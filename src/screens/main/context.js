import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

export const PlanosContextProvider = props => {
  const { children } = props;
  const values = {};

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
