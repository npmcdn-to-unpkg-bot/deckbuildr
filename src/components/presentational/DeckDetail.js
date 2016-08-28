import React, { PropTypes } from 'react';
import toastr from 'toastr';
import { fetchCards } from '../../actions/actionCreators';
import CardList from './CardList'

class DeckDetail extends React.Component{
  constructor () {
    super();

    this.onClickFavoriteDeck = this.onClickFavoriteDeck.bind(this);
    this.onClickSetDeckActive = this.onClickSetDeckActive.bind(this);
    this.onClickDeleteDeck = this.onClickDeleteDeck.bind(this);
  }

  componentDidMount () {
    this.deleteClicks = 0;
    var { deckRemainder, deck } = this.props;
    if (deckRemainder.length != 0) {
      this.props.fetchCardsById(deckRemainder);
    }
  }

  onClickDeleteDeck () {
    this.deleteClicks += 1;
    if (this.deleteClicks == 2) {
      this.props.deleteDeck(this.props.params.id);
      this.context.router.push('/decks');
    } else {
      toastr.error('Are you sure you want to delete this deck? Click delete again to permanently delete this deck.')
    }
  }

  onClickFavoriteDeck () {
    var that = this;
    if (this.props.deck.favorited) {
      toastr.success('You have successfully unfavorited this deck.');
    } else {
      toastr.success('You have successfully favorited this deck.')
    }

    this.props.favoriteDeck(this.props.params.id);
  }

  onClickSetDeckActive () {
    toastr.success('You have successfully set this deck as the active deck.');
    this.props.setDeckActive(this.props.params.id);
  }

  render () {
    const { deck, params, setDeckActive, favoriteDeck} = this.props;
    const { title, description, cards, favorited } = deck;

    return (
      <section>
        <section>
          <span onClick={this.onClickFavoriteDeck} className="icon glyphicon glyphicon-star"></span>
          <span onClick={this.onClickDeleteDeck} className="icon glyphicon glyphicon-remove-sign"></span>
          <span onClick={this.onClickSetDeckActive} className="icon glyphicon glyphicon-ok"></span>
        </section>
        <h2>
          {title
            ? title
            : 'Untitled'
          }
          {favorited &&
            <span className="glyphicon glyphicon-star"></span>
          }
        </h2>
        <section>
          <h4>Description</h4>
          {description
            ? description
            : <p>No description</p>
          }
        </section>
        <CardList cards={cards} activeDeck={params.id}/>
      </section>
    );
  }
};


DeckDetail.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default DeckDetail;
