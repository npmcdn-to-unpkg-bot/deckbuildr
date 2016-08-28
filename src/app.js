import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes.js';
import reducers from './reducers';
import './styles/style.scss';

// Get the initial state of the app injected at server render.
const localStorageCopy = typeof localStorage !== 'undefined' && localStorage.length ? JSON.parse(localStorage.getItem('stageverslagState')) : window.INITIAL_STATE || {};
const initialState = localStorageCopy;
const store = configureStore(initialState);

/**
 * Provider wraps the store around the application.
 **/
render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
