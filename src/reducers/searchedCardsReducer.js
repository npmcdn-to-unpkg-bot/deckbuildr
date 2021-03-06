import * as actionTypes from '../actions/actionTypes';

/**
 * searchedCards reducer that stores Ids for the cards you search.
 * @param state
 * @param action
 * @returns {*}
 */
export default function searchedCards (state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_CARDS_BY_ID_FULFILLED:
    case actionTypes.FETCH_CARDS_FULFILLED: {
      return action.cards.map(card => card.id);
    }
    case actionTypes.FETCH_CARDS_REJECTED: {
      return state;
    }
    default: {
      return state;
    }
  }
}
