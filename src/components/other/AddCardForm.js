import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addCardToDeck, removeCardFromDeck } from '../../actions/actionCreators';

/*
  Describes a stateful form to add cards with
 */
class AddCardForm extends React.Component {
  constructor () {
    super();

    // Bind this to event handler functions
    this.onClickAddCard = this.onClickAddCard.bind(this);
    this.onClickRemoveCard = this.onClickRemoveCard.bind(this);
  }

  /**
   * Dispatches an action to remove cards from a deck.
   * @param e
   */
  onClickRemoveCard(e) {
    e.preventDefault();
    const amount = this.amount.value;
    this.props.dispatch(removeCardFromDeck(this.props.card.id, this.props.card.edition, amount, this.props.activeDeck));
  }

  /**
   * Dispatches an action to add cards to a deck
   * @param e
     */
  onClickAddCard(e) {
    e.preventDefault();
    const amount = this.amount.value;
    this.props.dispatch(addCardToDeck(this.props.card, amount, this.props.activeDeck));
  }
  
  render() {
    return (
      <section>
        <form>
          <div className="input-group col-lg-6">
            <span className="input-group-btn">
              <button type="submit" className="btn btn-danger" onClick={this.onClickRemoveCard}>-</button>
            </span>
            <input
              type="number"
              className="form-control"
              defaultValue="1"
              min="1"
              max="4"
              ref={(ref) => { this.amount = ref; }}
            />

            <span className="input-group-btn">
              <button type="submit" className="btn btn-success" onClick={this.onClickAddCard}>+</button>
            </span>
          </div>
        </form>
      </section>
    );
  }
}

export default connect()(AddCardForm);
