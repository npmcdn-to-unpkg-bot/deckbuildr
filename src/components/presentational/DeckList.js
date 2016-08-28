import React, { PropTypes } from 'react';
import DeckSummary from './DeckSummary';
import { Link } from 'react-router';

const DeckList = ({decks, categories}) => {
  const deckSummaries = decks.map(deck => (
    <DeckSummary key={deck.id} {...deck} />
  ));

  const filters = [
    <Link key={"all"} to="/decks">| All | </Link>,
    ...categories.map(category => <Link class="text-capitalize" key={category.id} to={'/decks?filter=' + category.name}> {category.name} |</Link>)
  ];

  return (
    <section>
      <h1>
        decks
      </h1>
      <Link to='/create'>
        <span className='glyphicon glyphicon-plus'></span>
        create a new deck
      </Link>
      <section>
        {filters}
      </section>
      <section>
        {deckSummaries.length !== 0
          ? deckSummaries
          : <p>No decks to be displayed</p>
        }
      </section>
    </section>
  );
}

export default DeckList
