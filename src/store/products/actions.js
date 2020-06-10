import * as types from './actionTypes';

export default function setProducts(products) {
  return async dispatch => {
    dispatch(types.setProducts(products));
  };
}
