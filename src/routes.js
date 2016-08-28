import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import DeckListContainer from './components/container/DeckListContainer';
import CreateDeckForm from './components/other/CreateDeckForm';
import DeckDetailContainer from './components/container/DeckDetailContainer';

/*
  A route object with every available route in the system and their corresponding 'main' component
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/decks" component={DeckListContainer}/>
    <Route path="/decks/:id" component={DeckDetailContainer}/>
    <Route path="/create" component={CreateDeckForm}/>
  </Route>
);
