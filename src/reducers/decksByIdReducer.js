import * as actionTypes from '../actions/actionTypes';

export default function decksById (state = {}, action) {
  switch (action.type) {
    case actionTypes.ADD_DECK: {
      const { deck } = state;
      return {
        ...state,
        [action.id]: {
          deck,
          liked: 0
        }
      };
    }
    case actionTypes.DELETE_DECK: {
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    }
    case actionTypes.LIKE_DECK: {
      return state;
    }
    default: {
      return state;
    }
  }
}
