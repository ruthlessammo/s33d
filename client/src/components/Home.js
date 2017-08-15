import React, { Component } from 'react';
import Splash from './Splash';
import Story from './Story';
import Nav from './Nav';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Splash />
        <Story />
      </div>
    )
  }
}

export default Home
