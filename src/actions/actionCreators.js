import query from 'query-string';
// v4 is a function that generates a random ID.
import { v4 } from 'node-uuid'
import * as actionTypes from './actionTypes';


/**
 * Fetches cards based on a filter, then dispatches an action to let state know if the request was fulfilled or rejected.
 * @param filters
 * @returns {Function}
 */
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

/**
 * Fetches an array of cards by their IDs, then dispatches an action to let state know if the request was fulfilled or rejected.
 * @param cards
 * @returns {function()}
 */
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

/**
 * Returns a fetch request action object
 * @returns {{type}}
 */
export const fetchRequest = () => {
  return {
    type: actionTypes.FETCH_REQUEST
  }
}

/**
 * Returns a fetch fulfilled action object
 * @returns {{type}}
 */
export const fetchCardsFulfilled = (cards) => {
  return {
    type: actionTypes.FETCH_CARDS_FULFILLED,
    cards
  }
}

/**
 * Returns a fetch rejected action object
 * @returns {{type}}
 */
export const fetchCardsRejected = (error) => {
  return {
    type: actionTypes.FETCH_CARDS_REJECTED,
    error
  }
}

/**
 * Returns a fetch fulfilled action object
 * @returns {{type}}
 */
export const fetchCardsByIdFulfilled = (cards) => {
  return {
    type: actionTypes.FETCH_CARDS_BY_ID_FULFILLED,
    cards
  }
}

/**
 * Returns a fetch rejected action object
 * @returns {{type}}
 */
export const fetchCardsByIdRejected = (error) => {
  return {
    type: actionTypes.FETCH_CARDS_BY_ID_REJECTED,
    error
  }
}

/**
 * Returns a create deck action object
 * @param title
 * @param description
 * @param category
 * @returns {{type, deck: {id: *, title: *, description: *, category: *, cards: Array, favorited: boolean}}}
 */
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
/**
 * Returns a favorite deck action object
 * @param id
 * @returns {{type, id: *}}
 */
export const favoriteDeck = (id) => {
  return {
    type: actionTypes.TOGGLE_FAVORITE_DECK,
    id
  }
}

/**
 * Returns a delete deck action object
 * @param id
 * @returns {{type, id: *}}
 */
export const deleteDeck = (id) => {
  return {
    type: actionTypes.DELETE_DECK,
    id
  }
}

/**
 * Returns a set deck active action object
 * @param id
 * @returns {{type, id: *}}
 */
export const setDeckActive = (id) => {
  return {
    type: actionTypes.SET_DECK_ACTIVE,
    id
  }
}

/**
 * Returns an add card to deck action object
 * @param newCard
 * @param amount
 * @param deckId
 * @returns {{type, newCard: *, amount: (number|*), deckId: *}}
 */
export const addCardToDeck = (newCard, amount, deckId) => {
  amount = Number.parseInt(amount);

  return {
    type: actionTypes.ADD_CARD_TO_DECK,
    newCard,
    amount,
    deckId
  }
}

/**
 * Returns an remove card from deck action object
 * @param cardId
 * @param edition
 * @param amount
 * @param deckId
 * @returns {{type, cardId: *, edition: *, amount: *, deckId: *}}
 */
export const removeCardFromDeck = (cardId, edition, amount, deckId) => {
  return {
    type: actionTypes.REMOVE_CARD_FROM_DECK,
    cardId,
    edition,
    amount,
    deckId
  }
}