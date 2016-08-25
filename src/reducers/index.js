/**
 * Import reducers here and afterwards include them in the combineReducers
 * method.
 **/
import { combineReducers } from 'redux';
import searchedCards from './searchedCardsReducer';
import decksById from './decksByIdReducer';
import allIds from './identificationsReducer';
import activeDeck from './activeDeckReducer';
/**
 * Replace courses for an actual reducer.
 **/
export default combineReducers({
  activeDeck,
  searchedCards,
  decksById,
  allIds
});
