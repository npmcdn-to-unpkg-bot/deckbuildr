import * as actionTypes from '../actions/actionTypes';

export default function decksById (state = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_DECK: {
      const { deck } = action;
      return {
        ...state,
        [deck.id]: {
          ...deck,
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
      const { cardId, edition, deckId, amount } = action;
      const foundCard = state[deckId].cards.find(card => cardId === card.id && card.edition === edition);

      if (foundCard) {
        if (foundCard.amount - amount <= 0) {
          return Object.assign({}, state, {
            [deckId]: Object.assign({}, {
              ...state[deckId],
              cards: state[deckId].cards.filter(card => !(card.id === foundCard.id && card.edition === foundCard.edition))
            })
          });
        } else {
          const index = state[deckId].cards.findIndex(card => cardId === card.id && card.edition === edition);
          return Object.assign({}, state, {
            [deckId]: Object.assign({}, state[deckId], {
              cards: [
               ...state[deckId].cards.slice(0, index),
               ...state[deckId].cards.slice(index + 1),
                {
                  ...foundCard,
                  amount: foundCard.amount - amount
                }
              ]
            })
          })
        }
      } else {
        return state;
      }

    }
    case actionTypes.ADD_CARD_TO_DECK: {
      const { newCard, deckId, amount } = action;
      const foundCard = state[deckId].cards.find(card => newCard.id === card.id && card.edition === newCard.edition);
      const newState = { ...state}

      if (foundCard) {
        const index = newState[deckId].cards.findIndex(card => newCard.id === card.id && card.edition === newCard.edition);
        return Object.assign({}, state, {
          [deckId]: {
            ...state[deckId],
            cards: [
               ...state[deckId].cards.slice(0, index),
               ...state[deckId].cards.slice(index + 1),
              {
                ...foundCard,
                amount: foundCard.amount + amount
              }
            ]
          }
        });
      }
      else {
        newState[deckId] = {
          ...newState[deckId],
          cards: [
            ...newState[deckId].cards,
            {
              id: newCard.id,
              edition: newCard.edition,
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
