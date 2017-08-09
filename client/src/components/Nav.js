import React, { Component } from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor'
// import { configureAnchors } from 'react-scrollable-anchor'

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
// configureAnchors({scrollDuration: 600})

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
