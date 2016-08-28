import { connect } from 'react-redux';
import CardList from '../presentational/CardList';

const mapStateToProps = (state) => {
  return {
    cards: state.searchedCards
      .map(cardId => {
        const card = state.cardsById[cardId];
        return card.editions.map((edition, index) => {
          const newCard = { ...card };
          newCard.image_url = edition.image_url;
          newCard.set = edition.set;
          newCard.store_url = edition.store_url;
          newCard.edition = index;
          return newCard;
        })
      })
      .reduce((previousValue, currentValue, currentIndex) => [
        ...previousValue,
        ...currentValue
      ], []),
    activeDeck: state.activeDeck,
    isFetching: state.isFetching
  }
};

export default connect(mapStateToProps)(CardList);
