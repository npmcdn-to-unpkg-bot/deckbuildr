import React, { PropTypes } from 'react';
import Header from './Header';

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <section>
        <Header />
        <main className="container">
          {this.props.children}
        </main>
      </section>
    );
  }
};

export default App;
