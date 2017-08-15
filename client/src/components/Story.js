import React, { Component } from 'react';
import Grid from 'react-css-grid';
import Why from './Why';
import Solution from './Solution'
import How from './How';
import Result from './Result';
import Register from './Register';
import Splash from './Splash';
import Particles from 'react-particles-js';


class Story extends Component {
  render() {
    return (
      <div>

        <div className="particles">
          <div className="subParticles">
            <Particles style={["position: fixed"]} params={{
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
          </div>


          <div className="storyContainer">

            <Grid col={12}>
              <Splash />
            </Grid>

            <Grid col={2}></Grid>

            <Grid col={8}>
              <Why />

              <Solution />

              <How />

              <Result />

              <Register />
            </Grid>

            <Grid col={2}></Grid>
          </div>

        </div>




      </div>
    )
  }
}

export default Story;
