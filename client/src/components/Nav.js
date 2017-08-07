import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#why'>Why</a></li>
          <li><a href='#solution'>Solution</a></li>
          <li><a href='#how'>How</a></li>
          <li><a href='#Result'>Result</a></li>
          <li><a href='#join'>Join</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
