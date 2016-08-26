/**
 * Import reducers here and afterwards include them in the combineReducers
 * method.
 **/
import { combineReducers } from 'redux';
import searchedCards from './searchedCardsReducer';
import decksById from './decksByIdReducer';
import deckIds from './deckIds';
import activeDeck from './activeDeckReducer';
import isFetching from './isFetchingReducer';
import cardsById from './cardsById';
import categoriesById from './categoriesById';
import categoryIds from './categoryIds';

export default combineReducers({
  activeDeck,
  searchedCards,
  cardsById,
  decksById,
  deckIds,
  isFetching,
  // categoriesById,
  // categoryIds
});
