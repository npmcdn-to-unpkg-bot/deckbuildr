import * as actionTypes from '../actions/actionTypes';

export default function decksById (state = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_DECK: {
      const { deck } = action;
      return {
        ...state,
        [deck.id]: {
          ...deck,
          category: 'casual'
        }
      };
    }
    case actionTypes.DELETE_DECK: {
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    }
    case actionTypes.TOGGLE_FAVORITE_DECK: {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          favorited: !state[action.id].favorited
        }
      };
    }
    case actionTypes.REMOVE_CARD_FROM_DECK: {
      const { cardId, deckId, amount } = action;
      const foundCard = state[deckId].cards.find(card => cardId === card.id);

      if (foundCard) {
        if (foundCard.amount - amount <= 0) {
          return {
            ...state,
            [deckId]: {
              ...state[deckId],
              cards: state[deckId].cards
                .filter(cardObject => cardObject.id !== cardId)
            }
          }
        } else {
          return {
            ...state,
            [deckId]: {
              ...state[deckId],
              cards: [
                ...state[deckId].cards
                .filter(cardObject => cardObject.id !== cardId),
                {
                  id: cardId,
                  amount: foundCard.amount - amount
                }
              ]
            }
          }
        }

      } else {
        return state;
      }

    }
    case actionTypes.ADD_CARD_TO_DECK: {
      const { newCard, deckId, amount } = action;
      const newState = { ...state };
      const foundCard = newState[deckId].cards.find(card => newCard.id === card.id);

      if (foundCard) {
        newState[deckId] = {
          ...newState[deckId],
          cards: [
            ...newState[deckId].cards.filter(card => card.id !== foundCard.id),
            {
              id: foundCard.id,
              amount: foundCard.amount + amount
            }
          ]
        }
      }
      else {
        console.log(newCard.id);
        newState[deckId] = {
          ...newState[deckId],
          cards: [
            ...newState[deckId].cards,
            {
              id: newCard.id,
              amount
            }
          ]
        }
      }

      return newState;
    }
    default: {
      return state;
    }
  }
}
