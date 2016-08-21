import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { fetchCards, addCard } from '../actions/actionCreators';

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.onClickAddCard = this.onClickAddCard.bind(this);
    this.onClickFetchCards = this.onClickFetchCards.bind(this);
  }
  onClickFetchCards() {
    this.props.dispatch(fetchCards())
  }

  onClickAddCard() {
    this.props.dispatch(addCard())
  }

  render() {
    return (
      <section>
        <h1>This is a Redux starterkit!!!</h1>
        <button onClick={this.onClickFetchCards}>cards</button>
        <button onClick={this.onClickAddCard}>addcards</button>

        <Link to="about">Go to the about page with no actual information!</Link>
      </section>
    );
  }
};

function mapStateToProps(state) {
  return { cards: state.cards }
}

export default connect(mapStateToProps)(Home);
