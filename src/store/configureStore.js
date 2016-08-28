import { createStore, applyMiddleware, compose } from 'redux';
import invariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import persistState from 'redux-localstorage';

/**
 * configureStore returns a store for the application, along with store middleware.
 * @param initialState
 * @returns {*}
 */
export default function configureStore(initialState) {
  const middleware = process.env.NODE_ENV !== 'production' ?
      /*
       Thunk is a middleware that enables async actions in redux.
       Invariant is a middleware way to have you write immutable code when working with state, giving errors if you do. (dev only)
      */
    [thunk, invariant()] :
    [thunk];
  // Create a store using the combined reducers, initialState and middleware functions
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      // Syncs state keys with localStorage
      typeof window === 'object' ? persistState(['decksById', 'deckIds', 'activeDeck', 'categoryIds', 'categoriesById'], { key: 'deckbuildrState'}) : f => f,
      // Enables Redux dev tools that keep track of state flow, this helps a lot in development mode, but is not necessarily dev only
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  );
}
