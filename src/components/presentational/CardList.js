import React, { PropTypes } from 'react';
import Card from './Card';
import AddCardForm from '../other/AddCardForm';

const CardsList = ({cards, activeDeck}) => {
  let message;

  const cardElements = cards.map(card => (
    <section key={card.id} className="col-lg-3">
      <Card
        {...card}
      />
      <AddCardForm
        {...card}
      />
    </section>
  ));

  return (
    <section className="row">
      {cardElements}
    </section>
  );
}

export default CardsList
