import * as actionTypes from '../actions/actionTypes';

export default function activeDeck (state = null, action) {
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
