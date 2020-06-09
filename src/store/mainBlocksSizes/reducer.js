import * as types from './actionTypes';

export const initialState = {
  sidebar: {
    width: 256,
  },
  header: {
    height: 44,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CHANGE_HEADER_HEIGHT:
      return {
        ...state,
        header: { height: action.payload.number },
      };

    default:
      return {
        ...state,
      };
  }
};
