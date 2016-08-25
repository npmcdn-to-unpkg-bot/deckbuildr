import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../actions/actionCreators';

class CardsSearchBar extends React.Component {
  constructor () {
    super();

    this.onClickFetchCards = this.onClickFetchCards.bind(this);
  }

  onClickFetchCards (e) {
    e.preventDefault();
    const query = this.query.value;
    const filter = {
      q: query
    }

    this.props.dispatch(fetchCards(filter));
  }

  render() {
    return (
      <form onSubmit={this.onClickFetchCards}>
        <div className="input-group col-lg-4">
          <input
            type="text"
            id="query"
            className="form-control"
            name="query"
            ref={(ref) => { this.query = ref; }}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-info">
              Search
            </button>
          </span>
        </div>
      </form>
    )
  }
}

export default connect()(CardsSearchBar);
