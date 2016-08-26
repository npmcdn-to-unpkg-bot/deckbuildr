import { createStore, applyMiddleware, compose } from 'redux';
import invariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import persistState from 'redux-localstorage';

export default function configureStore(initialState) {
  const middleware = process.env.NODE_ENV !== 'production' ?
    [thunk, invariant()] :
    [thunk];
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      persistState(['decksById', 'deckIds'], { key: 'deckbuildrState'}),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  );
}
