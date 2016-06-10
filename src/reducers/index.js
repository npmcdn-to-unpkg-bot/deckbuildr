/**
 * Import reducers here and afterwards include them in the combineReducers
 * method.
 **/
import { combineReducers } from 'redux';
import cards from './cardsReducer';

/**
 * Replace courses for an actual reducer.
 **/
export default combineReducers({
  cards
});
