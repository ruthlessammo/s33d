import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
    return (
      <div>
        {/*<Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </Helmet>*/}
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
