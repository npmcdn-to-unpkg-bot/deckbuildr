import * as actionTypes from '../actions/actionTypes';

export default function deckIds (state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_DECK: {
      return [...state, action.deck.id];
    }
    case actionTypes.DELETE_DECK: {
      return state.filter(deck => deck.id === action.id);
    }
    default: {
      return state;
    }
  }
}
