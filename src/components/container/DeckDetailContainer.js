import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { favoriteDeck, deleteDeck, setDeckActive, fetchCardsById } from '../../actions/actionCreators';
import DeckDetail from '../presentational/DeckDetail';

/**
 * Maps deck state to a detailed deck component as props.
 * @param state
 * @param ownProps
 * @returns {{deck: {category: string, description: string, favorited: boolean, id: string, title: string, cards: Array}, deckRemainder: Array}}
 */
const mapStateToProps = (state, ownProps) => {
  // Check if deck exists
  const deckId = state.deckIds.find(deckId => deckId === ownProps.params.id);

  // Placeholder if deck doesn't exist, sorry, couldn't find a good way to tell when something wasn't found
  let deckRemainder = [];
  let deck = {
    category: "",
    description:"",
    favorited: false,
    id:"",
    title:"",
    cards: []
  };


  /*
    If a deck was found, add the cards we already have stored to the deck and the ones we don't to deckRemainder.
    This way, we only have to download the cards we don't already have
   */
  if (deckId) {
    deck = {
      ...state.decksById[deckId]
    }

    deckRemainder = deck.cards
      .filter(cardObject => !state.cardsById[cardObject.id])
      .map(cardObject => cardObject.id);

    deck.cards = deck.cards
      .filter(cardObject => state.cardsById[cardObject.id])
      .map(cardObject => {
        const i = cardObject.edition;
        const card = {
          ...state.cardsById[cardObject.id]
        }

        return {
          ...card,
          image_url: card.editions[i].image_url,
          set: card.editions[i].set,
          store_url: card.editions[i].store_url,
          edition: cardObject.edition
        }
    });
  }

  return {
    deck,
    deckRemainder
  }
}

/**
 * Receives a dispatch function to wrap actionCreators with a dispatch function, then maps the actionCreators to props.
 * @param dispatch
 * @returns {*}
 */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ favoriteDeck, deleteDeck, setDeckActive, fetchCardsById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);
