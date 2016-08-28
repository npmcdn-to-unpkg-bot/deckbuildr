import React, { PropTypes } from 'react';
import Header from './Header';

/**
 * Returns a stateless App component that renders the entire app including routes.
 * Children in this case, are the components corresponding to the routes.
 * @param children
 * @returns {JSX}
 * @constructor
 */
const App = ({children}) => {
    return (
      <section>
        <Header />
        <main className="container">
          {children}
        </main>
      </section>
    );
};

export default App;
