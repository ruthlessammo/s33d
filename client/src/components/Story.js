import React, { Component } from 'react';
import Why from './Why'
import Solution from './Solution'
import How from './How'
import Result from './Result'

class Story extends Component {
  render() {
    return (
      <div>

        <h1>Story</h1>
        <h2>Aim: Re-associating the supply chain</h2>

        <Why />
        <Solution />
        <How />
        <Result />

      </div>
    )
  }
}

export default Story;
