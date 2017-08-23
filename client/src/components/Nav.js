import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

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
          <li><Scrollchor style={["textDecoration: none"]} to='#home'>Home</Scrollchor></li>
          <li><Scrollchor style={["textDecoration: none"]} to='#why'>Why</Scrollchor></li>
          <li><Scrollchor style={["textDecoration: none"]} to='#solution'>Solution</Scrollchor></li>
          <li><Scrollchor style={["textDecoration: none"]} to='#how'>How</Scrollchor></li>
          <li><Scrollchor style={["textDecoration: none"]} to='#result'>Result</Scrollchor></li>
          <li><Scrollchor style={["textDecoration: none"]} to='#join'>Join</Scrollchor></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
