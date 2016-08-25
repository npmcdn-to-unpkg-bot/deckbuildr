import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import DecksListContainer from './components/container/DecksListContainer';
import CreateDeck from './components/CreateDeck';
import DeckContainer from './components/container/DeckContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/decks" component={DecksListContainer}/>
    <Route path="/decks/:id" component={DeckContainer}/>
    <Route path="/create" component={CreateDeck}/>
  </Route>
);
