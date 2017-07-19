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
          <h1>Story</h1>
          <h2>Aim: Re-associating the supply chain</h2>
        </Grid>

        <Grid col={6}>
          <Why />
        </Grid>

        <Grid col={6}>
          <Solution />
        </Grid>

        <Grid col={6}>
          <How />
        </Grid>

        <Grid col={6}>
          <Result />
        </Grid>

      </div>
    )
  }
}

export default Story;
