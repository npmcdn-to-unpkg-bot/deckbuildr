import { connect } from 'react-redux';
import DeckList from '../presentational/DeckList';

const mapStateToProps = (state, ownProps) => {
  const { filter } = ownProps.location.query;

  return {
    decks: state.deckIds
      .map(deckId => state.decksById[deckId])
      .filter(deck => {
          if (filter) {
            return deck.category === filter;
          }
          return true;
      })
  }
};

export default connect(mapStateToProps)(DeckList);
