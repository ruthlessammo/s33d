import React, { Component } from 'react';
import Logo from './Logo';
import seed from '../assets/seed.mp4';

class Splash extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo />
        </div>
        <video autoPlay loop muted>
            <source src={seed} type="video/mp4" />
        </video>
      </div>
    )
  }
}

export default Splash
