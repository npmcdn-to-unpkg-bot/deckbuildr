import { connect } from 'react-redux';
import DeckList from '../presentational/DeckList';

const mapStateToProps = (state) => {
  return {
    decks: state.allIds.map(deckId => state.decksById[deckId])
  }
};

export default connect(mapStateToProps)(DeckList);
