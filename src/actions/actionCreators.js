import query from 'query-string';
import { v4 } from 'node-uuid'
import * as actionTypes from './actionTypes';


export function fetchCards(filters = { q: '' }) {
  return function (dispatch) {
    const BASE = 'https://api.deckbrew.com/mtg/cards/typeahead?';
    const FILTERS = query.stringify(filters);
    const URI = `${BASE}${FILTERS}`;

    dispatch(fetchRequest());

    fetch(URI)
      .then(cards => cards.json())
      .then(cards => dispatch(fetchCardsFulfilled(cards)))
      .catch(error => dispatch(fetchCardsRejected(error)));
  };
}

export const fetchCardsById = (cards) => {
  return dispatch => {
    const BASE = 'https://api.deckbrew.com/mtg/cards/';
    const promises = cards.map(cardId => fetch(BASE + cardId).then(data => data.json()));

    dispatch(fetchRequest());

    Promise.all(promises)
      .then(cards => {
        dispatch(fetchCardsByIdFulfilled(cards))
      })
      .catch(err => {
        dispatch(fetchCardsByIdRejected(err))
      });
  }
}

export const fetchRequest = () => {
  return {
    type: actionTypes.FETCH_REQUEST
  }
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

export const fetchCardsByIdFulfilled = (cards) => {
  return {
    type: actionTypes.FETCH_CARDS_BY_ID_FULFILLED,
    cards
  }
}

export const fetchCardsByIdRejected = (error) => {
  return {
    type: actionTypes.FETCH_CARDS_BY_ID_REJECTED,
    error
  }
}

export const createDeck = ({title, description, category}) => {
  const id = v4();
  const deck = {
      id,
      title,
      description,
      category,
      cards: [],
      favorited: false
  };

  return {
    type: actionTypes.CREATE_DECK,
    deck
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

export const addCardToDeck = (newCard, amount, deckId) => {
  amount = Number.parseInt(amount);

  return {
    type: actionTypes.ADD_CARD_TO_DECK,
    newCard,
    amount,
    deckId
  }
}

export const removeCardFromDeck = (cardId, edition, amount, deckId) => {
  return {
    type: actionTypes.REMOVE_CARD_FROM_DECK,
    cardId,
    edition,
    amount,
    deckId
  }
}