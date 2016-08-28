import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes.js';
import reducers from './reducers';
import './styles/style.scss';

/*
  Get the initial state from the server on first visit to load categories. Afterwards, everything is synced with localstorage,
  so pageloads from then on will have localstorage parsed into them.
*/
const localStorageCopy = typeof localStorage !== 'undefined' && localStorage.length ? JSON.parse(localStorage.getItem('stageverslagState')) : window.INITIAL_STATE || {};
const initialState = localStorageCopy;
const store = configureStore(initialState);

/*
 Renders the app, Provider hooks up the store to the app and draws the Router on the screen, meaning every route.
*/
render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
