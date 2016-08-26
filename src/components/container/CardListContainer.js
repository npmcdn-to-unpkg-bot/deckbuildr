import { connect } from 'react-redux';
import CardList from '../presentational/CardList';

const mapStateToProps = (state) => {
  return {
    cards: state.searchedCards.map(cardId => state.cardsById[cardId])
  }
};

export default connect(mapStateToProps)(CardList);
