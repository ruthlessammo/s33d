import React, { Component } from 'react';
import Grid from 'react-css-grid';
import Why from './Why'
import Solution from './Solution'
import How from './How'
import Result from './Result'

class Story extends Component {
  render() {
    return (
      <div>
      
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

      </div>
    )
  }
}

export default Story;
