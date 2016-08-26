import * as actionTypes from '../actions/actionTypes';

export default function deckIds (state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_CATEGORY: {
      return [...state, action.category.id];
    }
    default: {
      return state;
    }
  }
}
