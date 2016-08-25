import React, { PropTypes } from 'react';

const Card = (card) => {
  return (
    <div>
      <img src={card.editions[0].image_url} />
      <p>{card.name}</p>
    </div>
  );
};

export default Card;
