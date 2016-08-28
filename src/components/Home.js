import React from 'react';
import CardsSearchBar from './other/CardsSearchBar';
import CardListContainer from './container/CardListContainer';

/**
 * Returns a Home component with a search bar and a cardlist
 * @param props
 * @returns {JSX}
 * @constructor
 */
const Home = (props) => {
  return (
    <section>
      <h1>Search cards</h1>
      <CardsSearchBar />
      <CardListContainer />
    </section>
  )
}

export default Home;
