import * as actionTypes from '../actions/actionTypes';

/**
 * Reducer that sets an active deck to be edited, but also deletes this reference when the deck is deleted.
 * @param state
 * @param action
 * @returns {*}
 */
function activeDeck (state = null, action) {
  switch (action.type) {
    case actionTypes.SET_DECK_ACTIVE: {
      state = action.id;
      return state;
    }
    case actionTypes.DELETE_DECK: {
      if (action.id == state) {
        state = null;
      }
      return state;
    }
    default: {
      return state;
    }
  }
}

export default activeDeck;