import * as actionTypes from '../actions/actionTypes';

/**
 * decksById reducer that keeps references to decks by id, but is also responsible for creating, deleting, favoriting
 * and updating decks. SIDE NOTE: Cards are stored to a DECK, but cards have ids and editions. Ids being equal, but editions
 * varying a lot. So a unique card is made unique by the combination of an ID with a certain edition. This has to be taken into
 * account when adding and deleting cards.
 * @param state
 * @param action
 * @returns {*}
 */
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
      // Finds the card you want to remove.
      const foundCard = state[deckId].cards.find(card => cardId === card.id && card.edition === edition);

      if (foundCard) {
        // If card is entirely removed from deck, remove it, else just lower the amount of them by amount
        if (foundCard.amount - amount <= 0) {

          /*
           Remove the card from the deck, but ONLY the card of which the ID and EDITION correspond with the
           to be deleted card. (Not just ID)
          */
          return Object.assign({}, state, {
            [deckId]: Object.assign({}, {
              ...state[deckId],
              // Filter the card that needs to be entirely removed
              cards: state[deckId].cards.filter(card => !(card.id === foundCard.id && card.edition === foundCard.edition))
            })
          });
        } else {
          // Finds the key of the card you want to remove one amount of
          const index = state[deckId].cards.findIndex(card => cardId === card.id && card.edition === edition);
          return Object.assign({}, state, {
            [deckId]: Object.assign({}, state[deckId], {
              // Only put back the other cards
              cards: [
               ...state[deckId].cards.slice(0, index),
               ...state[deckId].cards.slice(index + 1),
                  // Put in the same card, but with one amount less.
                {
                  ...foundCard,
                  amount: foundCard.amount - amount
                }
              ]
            })
          })
        }
      } else {
        // Return state if the card wasn't found.
        return state;
      }

    }
    case actionTypes.ADD_CARD_TO_DECK: {
      const { newCard, deckId, amount } = action;
      // Find card
      const foundCard = state[deckId].cards.find(card => newCard.id === card.id && card.edition === newCard.edition);
      const newState = { ...state};

      // If found, add one amount, else add new card entirely
      if (foundCard) {
        // Find index of found card
        const index = newState[deckId].cards.findIndex(card => newCard.id === card.id && card.edition === newCard.edition);
        return Object.assign({}, state, {
          [deckId]: {
            ...state[deckId],
            // Filter other cards
            cards: [
               ...state[deckId].cards.slice(0, index),
               ...state[deckId].cards.slice(index + 1),
                // Add the found card again with one amount added
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
              // Add a new card entirely
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
