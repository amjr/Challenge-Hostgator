import * as types from './actionTypes';

export function changeHeaderHeight(number) {
  return async (dispatch) => {
    dispatch(types.changeHeaderHeight(number));
  };
}

export function doNothing() {}
