import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const DeckList = ({decks}) => {
  const deckElements = decks.map(deck => {
    const link = '/decks/' + deck.id;
    return (<div key={deck.id}>
      <h2>Deck</h2>
      <Link to={link}>
        show deck
      </Link>
    </div>)
    }
  );

  return (
    <section>
      <h1>
        decks
      </h1>
      <Link to='/create'><span className='glyphicon glyphicon-plus'></span>create a new deck</Link>
      <section>
        {deckElements}
      </section>
    </section>
  );
}

export default DeckList
