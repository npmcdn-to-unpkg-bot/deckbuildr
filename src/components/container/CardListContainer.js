import { connect } from 'react-redux';
import CardList from '../presentational/CardList';

const mapStateToProps = (state) => {
  return {
    cards: state.searchedCards
  }
};

export default connect(mapStateToProps)(CardList);
