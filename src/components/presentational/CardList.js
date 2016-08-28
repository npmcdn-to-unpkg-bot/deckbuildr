import React, { PropTypes } from 'react';
import Card from './Card';
import AddCardForm from '../other/AddCardForm';
import Loader from 'react-loader';

const CardsList = ({cards, activeDeck, isFetching}) => {
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
