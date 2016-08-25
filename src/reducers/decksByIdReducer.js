import * as actionTypes from '../actions/actionTypes';

export default function decksById (state = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_DECK: {
      const { deck } = action;
      return {
        ...state,
        [deck.id]: {
          ...deck
        }
      };
    }
    case actionTypes.DELETE_DECK: {
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    }
    case actionTypes.TOGGLE_FAVORITE_DECK: {
      const newState = { ...state }
      newState[action.id].favorited = !newState[action.id].favorited;
      return newState;
    }
    default: {
      return state;
    }
  }
}
