import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { favoriteDeck, deleteDeck, setDeckActive, fetchCardsById } from '../../actions/actionCreators';
import DeckDetail from '../presentational/DeckDetail';

const mapStateToProps = (state, ownProps) => {
  const deckId = state.deckIds.find(deckId => deckId === ownProps.params.id);
  let deckRemainder = [];
  let deck = {
    category: "",
    description:"",
    favorited: false,
    id:"",
    title:"",
    cards: []
  };

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


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ favoriteDeck, deleteDeck, setDeckActive, fetchCardsById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);
