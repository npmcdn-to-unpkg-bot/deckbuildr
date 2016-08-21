import * as actionTypes from '../actions/actionTypes';

export default function cardsById (state = {}, action) {
  switch (action.type) {
    case actionTypes.ADD_DECK:
    case actionTypes.ADD_CARD: {
      return {
        ...state,
        [action.id]: action.card
      };
    }
    case actionTypes.DELETE_DECK:
    case actionTypes.DELETE_CARD: {
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    }
    default: {
      return state;
    }
  }
}
