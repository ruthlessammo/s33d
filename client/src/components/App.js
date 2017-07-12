import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <div>
        <Route
          path="/" exact
          render={() => (
            <Home />
          )}
        />
      </div>
    );
  }
}

export default App;
