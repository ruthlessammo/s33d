import React, { Component } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import Logo from './Logo';
import seed from '../assets/seed.mp4';

class Splash extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Video autoPlay loop muted>
            <source src={seed} type="mp4" />
        </Video>
      </div>
    )
  }
}

export default Splash
