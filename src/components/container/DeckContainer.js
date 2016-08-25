import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { favoriteDeck, deleteDeck, setDeckActive } from '../../actions/actionCreators';
import Deck from '../presentational/Deck';

const mapStateToProps = (state, { params }) => {
  const deck = state.allIds
    .filter(deckId => deckId !== params.id)
    .map(deckId => state.decksById[deckId]);

   /*
    * Hierzo wellicht cards ophalen en toevoegen aan deck?
    */
  return {
    deck
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ favoriteDeck, deleteDeck, setDeckActive }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
