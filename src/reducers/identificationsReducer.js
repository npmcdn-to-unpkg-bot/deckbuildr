import * as actionTypes from '../actions/actionTypes';

export default function allIds (state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_DECK: {
      return [...state, action.deck.id];
    }
    case actionTypes.ADD_CARD_TO_DECK: {
      let newDeck = state.decksById[state.activeDeck];
      // TODO: Make a way to add cards.
      // TODO: Make a way to remove cards.
      // TODO: Make a way to show cards along deck
      // TODO: Make a way to store cards in localStorage
      // TODO: Make nice redirects after certain actions.
      // TODO: Make categories.
      // TODO: Do some more styling
      // TODO: Random card hand
      return [...state, action.id];
    }
    case actionTypes.DELETE_DECK:
    case actionTypes.DELETE_CARD: {
      return state.filter(card => card.id === action.id);
    }
    default: {
      return state;
    }
  }
}
