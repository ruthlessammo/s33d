import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Logo extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
          transitionName="logoTransition"
          transitionEnterTimeout={500}
          transitionEnter={true}
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionLeaveTimeout={1000}>

        <h1 className="logo">S33D</h1>

      </ReactCSSTransitionGroup>
    )
  }
}

export default Logo
