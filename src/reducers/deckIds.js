import * as actionTypes from '../actions/actionTypes';

/**
 * deckIds reducer that keeps track of the all the categories in the system by ID.
 * @param state
 * @param action
 * @returns {*}
 */
export default function deckIds (state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_DECK: {
      return [...state, action.deck.id];
    }
    case actionTypes.DELETE_DECK: {
      return state.filter(deck => deck !== action.id);
    }
    default: {
      return state;
    }
  }
}
