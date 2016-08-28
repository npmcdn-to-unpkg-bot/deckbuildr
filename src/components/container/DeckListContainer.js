import { connect } from 'react-redux';
import DeckList from '../presentational/DeckList';

/**
 * Maps decks and categories to a list of decks component.
 * @param state
 * @param ownProps
 * @returns {{decks: (Query|Array.<T>|*|Aggregate), categories: Array}}
 */
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
      .sort(deck => !deck.favorited),
    categories: state.categoryIds
      .map(categoryId => state.categoriesById[categoryId])
  }
};

export default connect(mapStateToProps)(DeckList);