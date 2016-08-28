import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import LazyLoader from 'react-lazy-load';

/**
 * Returns a stateless Card component.
 * Images are lazily loaded using the module 'react-lazy-load'.
 * @param image_url
 * @param name
 * @param set
 * @param store_url
 * @returns {JSX}
 * @constructor
 */
const Card = ({image_url, name, set, store_url}) => {
  return (
        <section>
          <LazyLoader offsetVertical={0} height={311}>
            <img src={image_url}/>
          </LazyLoader>
          <div>
            <h5>Card name</h5>
            <p>{name}</p>
          </div>
          <div>
            <h5>Set</h5>
            <p>{set}</p>
          </div>
          <Link to={store_url} target="_blank">Buy this card</Link>
        </section>
  );
};

export default Card;
