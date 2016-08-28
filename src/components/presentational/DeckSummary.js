import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const DeckSummary = ({ id, title, description, favorited}) => {
  return (
    <section>
      <h2>
        {title
          ? title
          : 'Untitled'
        }
        {favorited &&
            <span className="glyphicon glyphicon-star"></span>
        }
      </h2>
      <div>
        {description
          ? description
          : <p>No description</p>
        }
      </div>
      <Link to={"/decks/" + id}>Show this deck</Link>
    </section>
  )
}

export default DeckSummary
