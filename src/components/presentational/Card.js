import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Card = (props) => {
  return (
    <section>
      <img src={props.image_url} />
      <section>
        <div>
          <h5>Card name</h5>
          <p>{props.name}</p>
        </div>
        <div>
          <h5>Set</h5>
          <p>{props.set}</p>
        </div>
        <Link to={props.store_url} target="_blank">Buy this card</Link>
      </section>
    </section>
  );
};

export default Card;
