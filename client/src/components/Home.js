import React, { Component } from 'react';
import Splash from './Splash';
import Story from './Story';
import Register from './Register';
import Nav from './Nav';
import ScrollableAnchor from 'react-scrollable-anchor'

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ScrollableAnchor id={'home'}>
          <Splash />
        </ScrollableAnchor>
        <Story />
        <ScrollableAnchor id={'join'}>
          <Register />
        </ScrollableAnchor>
      </div>
    )
  }
}

export default Home
