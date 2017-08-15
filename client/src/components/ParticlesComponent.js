import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesComponent extends Component {
  render() {
    return (
      <Particles params={{
              particles: {
                line_linked: {
                  shadow: {
                    enable: true,
                    color: "#000000",
                    blur: .5
                  }
                }
              }
            }} />

    )
  }
}

export default ParticlesComponent
