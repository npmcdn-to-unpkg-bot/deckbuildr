import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addCardToDeck, deleteCardFromDeck } from '../../actions/actionCreators';

class AddCardForm extends React.Component {
  constructor ({ cardId }) {
    super();

    this.onClickAddCard = this.onClickAddCard.bind(this);
    this.onClickRemoveCard = this.onClickRemoveCard.bind(this);
  }

  onClickRemoveCard(e) {
    e.preventDefault();
    const amount = this.amount.value;

    this.dispatch(removeCard(id, amount));
  }

  onClickAddCard(e) {
    e.preventDefault();
    const amount = this.amount.value;

    this.dispatch(addCard(id, amount));
  }

  render() {
    return (
      <section>
        <form>
          <div className="input-group col-lg-6">
            <span className="input-group-btn">
              <button type="submit" className="btn btn-danger" onClick={this.onClickAddCard}>-</button>
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
