import React from 'react';
import CardsSearchBar from './other/CardsSearchBar';
import CardListContainer from './container/CardListContainer';

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
