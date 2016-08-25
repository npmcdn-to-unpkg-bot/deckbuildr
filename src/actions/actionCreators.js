import query from 'query-string';
import { v4 } from 'node-uuid'
import * as actionTypes from './actionTypes';

export function fetchCards(filters = { q: '' }) {
  return function (dispatch) {
    const BASE = 'https://api.deckbrew.com/mtg/cards/typeahead?';
    const FILTERS = query.stringify(filters);
    const URI = `${BASE}${FILTERS}`;

    fetch(URI)
      .then(cards => cards.json())
      .then(cards => dispatch(fetchCardsFulfilled(cards)))
      .catch(error => dispatch(fetchCardsRejected(error)));
  };
}

export const fetchCardsFulfilled = (cards) => {
  return {
    type: actionTypes.FETCH_CARDS_FULFILLED,
    cards
  }
}

export const fetchCardsRejected = (error) => {
  return {
    type: actionTypes.FETCH_CARDS_REJECTED,
    error
  }
}

export const createDeck = ({title, description, category = null}) => {
  const id = v4();

  return {
    type: actionTypes.CREATE_DECK,
    deck: {
      id,
      title,
      description,
      category,
      cards: [],
      favorited: false
    }
  }
}

export const favoriteDeck = (id) => {
  return {
    type: actionTypes.TOGGLE_FAVORITE_DECK,
    id
  }
}

export const deleteDeck = (id) => {
  return {
    type: actionTypes.DELETE_DECK,
    id
  }
}

export const setDeckActive = (id) => {
  return {
    type: actionTypes.SET_DECK_ACTIVE,
    id
  }
}

export const addCardToDeck = (id, amount) => {
  return {
    type: actionTypes.ADD_CARD_TO_DECK,
    id,
    amount
  }
}

export const removeCardFromDeck = (id, amount) => {
  return {
    type: actionTypes.REMOVE_CARD_FROM_DECK,
    id,
    amount
  }
}

