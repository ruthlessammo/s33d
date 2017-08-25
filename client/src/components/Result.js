import React, { Component } from 'react';
import capital from '../assets/png-icons/id-card-5.png';
import funnel from '../assets/png-icons/funnel.png';
import food from '../assets/png-icons/food.png';
import shelter from '../assets/png-icons/home-2.png';
import data from '../assets/png-icons/database.png';

class Result extends Component {
  render() {
    return (
      <div className="resultContainer">
        <h3 className="result">Result</h3>
        <p className="resultSub">S33D growing awareness and innovation cooperation platform anchored around the consumption, curation and creation of the pillars of modern human sustinence.</p>
        <ul>
          <li className="resultPillars">Capital, Fuel, Food, Shelter, and Data use</li>
          <li className="pillars">
            <img src={capital}/>
            <img src={funnel}/>
            <img src={food}/>
            <img src={shelter}/>
            <img src={data}/>
          </li>
        </ul>
        <p className="focus">Focused community architechural mandate to incentivise:</p>
        <ul>
          <li className="focusP">The collation of transparent P2P <em>provenance webs</em></li>
          {/*<li><em>Extracting a unifying value</em> from the curation of a crypto-assets in a community coherence and diversity index.</li>*/}
          <li className="focusP">The distribution of community co-education while fostering knowledge diversity.</li>
          <li className="focusP">The preservation of bio-diversity through recalibration of global capital stores.</li>
        </ul>
      </div>

    )
  }
}

export default Result
