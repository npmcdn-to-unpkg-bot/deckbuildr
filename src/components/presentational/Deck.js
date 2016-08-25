import React, { PropTypes } from 'react';

const Deck = (props) => {
  console.log(props);
  return (
    <section>
      <h2>Deck</h2>
      <span onClick={() => { props.favoriteDeck(props.params.id)}} className="glyphicon glyphicon-star"></span>
      <span onClick={() => { props.deleteDeck(props.params.id)}} className="glyphicon glyphicon-remove-sign"></span>
      <span onClick={() => { props.setDeckActive(props.params.id)}} className="glyphicon glyphicon-ok"></span>

    </section>
  );
};

export default Deck;
