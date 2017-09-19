import React, { Component } from 'react';
import '../css/App.css';

class Logo extends Component {
  constructor() {
    super();
    this.state = {};
    this.jumble = this.jumble.bind(this);
  }

  jumble() {
    let word;
    let words = ['Evolutional', 'Energetic', 'Educational'];
    for (let i=0; i<words.length; i++) {
      word = words;
      console.log(this.word);
      return word;
    }

  
  }
  render() {
    return (
      <div>
        <h1 className="logo">S<span className="logoSpan">&#9776;&#9776;D</span></h1>
        <p><em>Sowing {this.word} Development</em></p>
      </div>
    )
  }
}

export default Logo
