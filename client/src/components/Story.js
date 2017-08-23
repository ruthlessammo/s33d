import React, { Component } from 'react';
import Grid from 'react-css-grid';
import Why from './Why';
import Solution from './Solution'
import How from './How';
import Result from './Result';
import Register from './Register';
import Splash from './Splash';
import Particles from 'react-particles-js';
import Scrollchor from 'react-scrollchor';


class Story extends Component {
  render() {
    return (
      <div>

        <div className="particles">
          <div className="subParticles">
            <Particles style={["position: fixed"]} params={{
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: '#000000'
                },
                shape: {
                  type: "triangle",
                  polygon: {
                    nb_sides: 5
                  }
                },
                opacity: {
                  value: 0.5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 1,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: '#000000',
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: 'none',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: true,
                    mode: 'repulse'
                  },
                  onclick: {
                    enable: true,
                    mode: 'bubble'
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 100,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 300,
                    size: 5,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 150,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 10
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true

                  }} />
          </div>


          <div className="storyContainer">

            <Grid col={12}>
              <Splash id="home" />
            </Grid>

            <Grid col={2}></Grid>

            <Grid col={8}>
              <Why id="why" />

              <Solution id="solution" />

              <How id="how" />

              <Result id="result" />

              <Register id="join" />
            </Grid>

            <Grid col={2}></Grid>
          </div>

        </div>




      </div>
    )
  }
}

export default Story;
