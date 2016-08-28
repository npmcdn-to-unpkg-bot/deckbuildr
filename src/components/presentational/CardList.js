import React, { PropTypes } from 'react';
import Card from './Card';
import AddCardForm from '../other/AddCardForm';
import Loader from 'react-loader';

/**
 * Returns a stateless CardsList component that renders cards and forms to add cards.
 * Loader is an element that adds a spinning wheel to show progress of retrieving cards. The module 'react-loader' was used to achieve this.
 * @param cards
 * @param activeDeck
 * @param isFetching
 * @returns {XML}
 * @constructor
 */
const CardsList = ({cards, activeDeck, isFetching}) => {
  // Map card elements with corresponding data and forms.
  const cardElements = cards.map((card, index) => (
    <section key={card.id + '_' + index} className="col-lg-3">
      <Card
        {...card}
      />
      {activeDeck &&
        <AddCardForm
          card={card}
          activeDeck={activeDeck}
        />
      }
    </section>
  ));

  return (
    <Loader loaded={!isFetching} color="#66ccff">
      <section className="row">
        {cardElements.length !== 0
          ? cardElements
          : <p>No cards to be displayed</p>
        }
      </section>
    </Loader>
  );
}

export default CardsList
