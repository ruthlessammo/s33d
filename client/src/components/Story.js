import React, { Component } from 'react';
import Grid from 'react-css-grid';
import Why from './Why';
import Solution from './Solution'
import How from './How';
import Result from './Result';
import Register from './Register';
import Particles from 'react-particles-js';


class Story extends Component {
  render() {
    return (
      <Grid col={12}>

        <div className="particles">
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
        </div>

        <div className="storyContainer">
          <Grid col={8}>
            <Grid col={12}>
              <Why />
            </Grid>

            <Grid col={12}>
              <Solution />
            </Grid>

            <Grid col={12}>
              <How />
            </Grid>

            <Grid col={12}>
              <Result />
            </Grid>
            <Grid col={12}>
              <Register />
            </Grid>
          </Grid>
        </div>



      </Grid>
    )
  }
}

export default Story;
