import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const DeckSummary = ({ id, title, description, category, cards, favorited}) => {
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
        <h4>Description</h4>
        {description
          ? description
          : <p>No description</p>
        }
      </div>
      {category
        ? (<div>
              <h4>Category</h4>
              <p>{category}</p>
            </div>)
        : ''
      }
      <p>This deck has {cards.length} cards.</p>
      <Link to={"/decks/" + id}>Show this deck</Link>
    </section>
  )
}

export default DeckSummary
