import React, { Component } from 'react';
import Grid from 'react-css-grid';
import Why from './Why';
import Solution from './Solution'
import How from './How';
import Result from './Result';
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
                }}/>
        </div>
        <Grid col={8} style={["zIndex:2","margin:0 auto"]}>
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
        </Grid>



      </Grid>
    )
  }
}

export default Story;
