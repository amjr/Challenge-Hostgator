import * as types from './actionTypes';

export function doNothing() {
  return null;
}

export function setProducts(products) {
  return async dispatch => {
    dispatch(types.setProducts(products));
  };
}
