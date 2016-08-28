import * as actionTypes from '../actions/actionTypes';

export default function cardsById (state = {}, action) {
  switch (action.type) {
    case actionTypes.FETCH_CARDS_BY_ID_FULFILLED:
    case actionTypes.FETCH_CARDS_FULFILLED: {
      const { cards } = action;
      const cardsObject = {};
      cards.forEach(card => {
        cardsObject[card.id] = { ...card };
      });

      return {
        ...state,
        ...cardsObject
      };
    }
    default: {
      return state;
    }
  }
}
