import React, { Component } from 'react';
import Logo from './Logo';
import seed from '../assets/seed.mp4';
import Grid from 'react-css-grid';
import '../css/Style.css'

class Splash extends Component {
  render() {
    return (
      <div>
        <Grid col={12}>
          <div className="splashLogo">
            <Logo />
          </div>
        </Grid>
        <Grid col={12} className="splashVideo">
          <video className="seedVideo" autoPlay loop muted>
              <source src={seed} type="video/mp4" />
          </video>
        </Grid>
      </div>
    )
  }
}

export default Splash
