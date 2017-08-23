import React, { Component } from 'react';
import Grid from 'react-css-grid';
import repeat from '../assets/png-icons/repeat.png';
import share2 from '../assets/png-icons/share-2.png';
import users1 from '../assets/png-icons/users-1.png';

class Solution extends Component {
  render() {
    return (
      <Grid col={12}>
        <div className="solutionContainer">
          <h3 className="solutionHeading">Solution</h3>
          <p className="solutionP">
            Distribute a <strong><em>co-operative community driven exchange platform.</em></strong> By leveraging past, present, and future blockchain innovations to subsidies:
          </p>

          <ol className="solutionPoints">
            <li>Spherical supply-chain awareness</li>
            <li>The distribution of community educational incentives.</li>
          </ol>
          <br/>
          <br/>
          <div className="solutionIcons">
            <img src={share2}/>
            <img src={users1}/>
            <img src={repeat}/>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div style={["width:100%"]}><hr/></div>
        </div>
      </Grid>

    )
  }
}

export default Solution
