import React, { PropTypes } from 'react';
import { fetchCards } from '../../actions/actionCreators';
class Deck extends React.Component{
  constructor () {
    super();
  }

  componentDidMount () {
    var { deckRemainder, deck } = this.props;
    if (deckRemainder.length != 0) {
      console.log(deckRemainder);
      this.props.fetchCardsById(deckRemainder);
    }
  }

  render () {
    const cardElements = this.props.deck.cards.map(card => (<li key={card.id}>Card</li>))
    return (
      <section>
        <h2>Deck</h2>
        <span onClick={() => { this.props.favoriteDeck(this.props.params.id)}} className="glyphicon glyphicon-star"></span>
        <span onClick={() => { this.props.deleteDeck(this.props.params.id)}} className="glyphicon glyphicon-remove-sign"></span>
        <span onClick={() => { this.props.setDeckActive(this.props.params.id)}} className="glyphicon glyphicon-ok"></span>
        <ul>
          {cardElements}
        </ul>
      </section>
    );
  }
};

export default Deck;
