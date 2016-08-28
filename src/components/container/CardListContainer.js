import { connect } from 'react-redux';
import CardList from '../presentational/CardList';

/**
 * Maps cards, the active deck and the isFetching state to props for the Cardlists component
 * @param state
 * @returns {{cards: *, activeDeck: *, isFetching: *}}
 */
const mapStateToProps = (state) => {
  return {
    // Maps every card to it's corresponding editions.
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

//  DO A QUICK CHECK HERE

export default connect(mapStateToProps)(CardList);
