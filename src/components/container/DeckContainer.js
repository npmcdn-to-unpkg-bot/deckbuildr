import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { favoriteDeck, deleteDeck, setDeckActive, fetchCardsById } from '../../actions/actionCreators';
import Deck from '../presentational/Deck';

const mapStateToProps = (state, { params }) => {
  // TODO: Reload issue
  const deckId = state.deckIds
    .find(deckId => deckId === params.id);

  const deck = {
    ...state.decksById[deckId]
  };

  const deckRemainder = deck.cards
    .filter(cardObject => !state.cardsById[cardObject.id])
    .map(cardObject => cardObject.id);

  deck.cards = deck.cards
    .filter(cardObject => {
      return state.cardsById[cardObject.id]
    })
    .map(cardObject => ({
      ...state.cardsById[cardObject.id],
      ...cardObject
    }));


  return {
    deck,
    deckRemainder
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ favoriteDeck, deleteDeck, setDeckActive, fetchCardsById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
