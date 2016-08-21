import * as actionTypes from '../actions/actionTypes';

export default function allIds (state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_DECK:
    case actionTypes.ADD_CARD: {
      return [...state, action.id];
    }
    case actionTypes.DELETE_DECK:
    case actionTypes.DELETE_CARD: {
      return state.filter(card => card.id === action.id);
    }
    default: {
      return state;
    }
  }
}
