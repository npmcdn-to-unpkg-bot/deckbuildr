import * as actionTypes from '../actions/actionTypes';

/**
 * categoriesById reducer keeps references to categories by id. Categories are static in this app, so they don't have
 * actions bound to them. Initial state for this reducer comes from the initial server render.
 * @param state
 * @param action
 * @returns {{}}
 */
export default function categoriesById (state = {}, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
