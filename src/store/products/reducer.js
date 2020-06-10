import * as types from './actionTypes';

export const initialState = {
  allProducts: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SETTING_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload.products
      };

    default:
      return {
        ...state
      };
  }
};
