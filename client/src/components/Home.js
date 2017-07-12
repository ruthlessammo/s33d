import React, { Component } from 'react';
import Splash from './Splash';
import Story from './Story';
import Register from './Register';

class Home extends Component {
  render() {
    return (
      <div>
        <Splash />
        <Story />
        <Register />
      </div>
    )
  }
}

export default Home
