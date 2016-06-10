import * as actionTypes from '../actions/actionTypes';

export default function cards (state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_CARDS_FULFILLED: {
      return action.cards;
    }
    default: {
      return state;
    }
  }
}
