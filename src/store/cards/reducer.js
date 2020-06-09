import json from 'config/data.json';

export const initialState = {
  allCards: json.cards,
  defaultCard: json.cards[0],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
