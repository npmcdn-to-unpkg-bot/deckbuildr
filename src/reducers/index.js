
import { combineReducers } from 'redux';
import searchedCards from './searchedCardsReducer';
import decksById from './decksByIdReducer';
import deckIds from './deckIds';
import activeDeck from './activeDeckReducer';
import isFetching from './isFetchingReducer';
import cardsById from './cardsById';
import categoriesById from './categoriesById';
import categoryIds from './categoryIds';
/**
 * combineReducers combines all the reducers that will make up what your state 'looks like'.
 * SIDE NOTE: I chose to normalize my state like a database, making -ById and -Ids tables. This reduces redundance.
 */
export default combineReducers({
  activeDeck,
  searchedCards,
  cardsById,
  decksById,
  deckIds,
  isFetching,
  categoriesById,
  categoryIds
});
