import * as actionTypes from '../actions/actionTypes';

export default function isFetching (state = false, action) {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST:
    case actionTypes.FETCH_CARDS_FULFILLED: {
      state = !state;
      return state;
    }
    default: {
      return state;
    }
  }
}
