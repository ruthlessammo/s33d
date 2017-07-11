import React, { Component } from 'react';
import Splash from './Splash';
import Story from './Story';

class Home extends Component {
  render() {
    return (
      <div>
        <Splash />
        <Story />
      </div>
    )
  }
}

export default Home
