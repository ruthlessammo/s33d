import React, { Component } from 'react';
import Story from './Story';
import Nav from './Nav';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Story />
      </div>
    )
  }
}

export default Home
