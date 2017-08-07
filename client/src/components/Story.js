import React, { Component } from 'react';
import Grid from 'react-css-grid';
import Why from './Why'
import Solution from './Solution'
import How from './How'
import Result from './Result'
import ScrollableAnchor from 'react-scrollable-anchor'

class Story extends Component {
  render() {
    return (
      <div>

        <Grid col={12}>
          <ScrollableAnchor id={'why'}>
            <Why />
          </ScrollableAnchor>
        </Grid>

        <Grid col={12}>
          <ScrollableAnchor id={'solution'}>
            <Solution />
          </ScrollableAnchor>
        </Grid>

        <Grid col={12}>
          <ScrollableAnchor id={'how'}>
            <How />
          </ScrollableAnchor>
        </Grid>

        <Grid col={12}>
        <ScrollableAnchor id={'result'}>
          <Result />
        </ScrollableAnchor>
        </Grid>

      </div>
    )
  }
}

export default Story;
