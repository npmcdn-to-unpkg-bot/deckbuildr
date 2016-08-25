import React from 'react';
import { connect } from 'react-redux';
import { createDeck } from '../actions/actionCreators';
import { Link } from 'react-router';
class CreateDeck extends React.Component {
  constructor () {
    super();
    this.onSubmitCreateDeck = this.onSubmitCreateDeck.bind(this);
  }

  onSubmitCreateDeck (e) {
    e.preventDefault();
    const { title, description } = this;
    const deck = {
      title: title.value,
      description: description.value
    };

    this.props.dispatch(createDeck(deck));
  }

  render () {
    return (
      <section>
        <h1>create a new deck</h1>
        <Link to="/decks"><span className="glyphicon glyphicon-arrow-left"></span></Link>
        <form onSubmit={this.onSubmitCreateDeck}>
          <label htmlFor="title">Deck title</label>
          <div className="input-group">
            <input
              type="text"
              id="title"
              className="form-control"
              name="title"
              ref={(ref) => { this.title = ref; }}
            />
          </div>
          <label htmlFor="description">Deck description</label>
          <div className="input-group">
            <input
              type="text"
              id="description"
              className="form-control"
              name="description"
              ref={(ref) => { this.description = ref; }}
            />
          </div>
          <button type="submit" className="btn btn-success">Create deck</button>
        </form>
      </section>
    )
  }
}

export default connect()(CreateDeck);