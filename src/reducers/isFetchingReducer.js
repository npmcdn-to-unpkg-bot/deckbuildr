import * as actionTypes from '../actions/actionTypes';

/**
 * isFetching reducer keeps track of the isFetching state, used to display loaders when something is being requested.
 * This simply toggles a boolean every time a request is done and fulfilled.
 * @param state
 * @param action
 * @returns {boolean}
 */
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
