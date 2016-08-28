import React, { PropTypes } from 'react';
import DeckSummary from './DeckSummary';
import { Link } from 'react-router';

/**
 * Returns a stateless DeckList component that shows filters and deck summaries
 * @param decks
 * @param categories
 * @returns {XML}
 * @constructor
 */
const DeckList = ({decks, categories}) => {
    // Map the decks to DeckSummary elements
  const deckSummaries = decks.map(deck => (
    <DeckSummary key={deck.id} {...deck} />
  ));

    // Map the categories to filter elements
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
