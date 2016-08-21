/**
 * Import reducers here and afterwards include them in the combineReducers
 * method.
 **/
import { combineReducers } from 'redux';
import searchedCards from './searchedCardsReducer';
import cardsById from './cardsByIdReducer';
import decksById from './decksByIdReducer';
import allIds from './identificationsReducer';

/**
 * Replace courses for an actual reducer.
 **/
export default combineReducers({
  searchedCards,
  cardsById,
  decksById,
  allIds
});
