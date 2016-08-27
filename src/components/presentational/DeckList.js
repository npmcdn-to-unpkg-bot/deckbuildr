import React, { PropTypes } from 'react';
import DeckSummary from './DeckSummary';
import { Link } from 'react-router';

const DeckList = ({decks}) => {
  const deckSummaries = decks.map(deck => (
    <DeckSummary key={deck.id} {...deck} />
  ));

  return (
    <section>
      <h1>
        decks
      </h1>
      <Link to='/create'><span className='glyphicon glyphicon-plus'></span>create a new deck</Link>
      <section>
        {deckSummaries}
      </section>
    </section>
  );
}

export default DeckList
