import React, { PropTypes } from 'react';
import toastr from 'toastr';
import { fetchCards } from '../../actions/actionCreators';
import CardList from './CardList'

/* Class that defines detailed deck which shows its properties and it's cards, reusing CardList*/
class DeckDetail extends React.Component{
  constructor () {
    super();

    // Bind this to event handler functions
    this.onClickFavoriteDeck = this.onClickFavoriteDeck.bind(this);
    this.onClickSetDeckActive = this.onClickSetDeckActive.bind(this);
    this.onClickDeleteDeck = this.onClickDeleteDeck.bind(this);
  }

  /**
   * Sets a deleteClicks on mount and checks if all cards have been fetched yet. If they aren't, only the remaining cards are fetched.
   */
  componentDidMount () {
    this.deleteClicks = 0;
    var { deckRemainder, deck } = this.props;
    if (deckRemainder.length != 0) {
      this.props.fetchCardsById(deckRemainder);
    }
  }

  /**
   * Deletes a deck after two clicks on the delete button. Also shows corresponding toasts to actions and redirects
   * after deletion
   */
  onClickDeleteDeck () {
    this.deleteClicks += 1;
    if (this.deleteClicks == 2) {
      this.props.deleteDeck(this.props.params.id);
      toastr.success('Successfully deleted the deck');
      this.context.router.push('/decks');
    } else {
      toastr.error('Are you sure you want to delete this deck? Click delete again to permanently delete this deck.')
    }
  }

  /**
   * Toggles if a certain deck is favorited or not and shows a corresponding toast.
   */
  onClickFavoriteDeck () {
    if (this.props.deck.favorited) {
      toastr.success('You have successfully unfavorited this deck.');
    } else {
      toastr.success('You have successfully favorited this deck.')
    }

    this.props.favoriteDeck(this.props.params.id);
  }

  /**
   * Sets the deck as active, so cards can be added or removed from it when searching for cards. Also shows a corresponding toast.
   */
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
