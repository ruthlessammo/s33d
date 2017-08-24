import React, { Component } from 'react';
import roadMap from '../assets/png-icons/map-1.png';
import network from '../assets/png-icons/network.png';
import help from '../assets/png-icons/help.png';
import minus from '../assets/png-icons/minus.png';

class How extends Component {
  render() {
    return (
      <div className="howContainer">
        <h3>How</h3>
          <ol>
            <li className="howNumber"><p><span className="numberSpan">1.</span> Launch a crowdsourced <strong><em>cyrpto-assets</em></strong> knowledge network.</p>
              <ul>
                <li className="howNumber"><span className="numberSpan">2.</span> Sow a pioneering <strong><em>community-consensus</em></strong>experiment.</li>
                <li className="howNumber"><span className="numberSpan">3.</span> Grow a collectively managed pool of<strong><em>community capital.</em></strong> Creating a unique <strong><em>community investment index.</em></strong></li>
              </ul>
            </li><br/><br/>
            <div className="map"><img src={roadMap}/></div>
            <li>
              <p className="roadMap">Clear ROADMAP to the flowering of a more advanced community exchange platform ontology around the knowledge and trade of:</p><br/><br/>
              <ul>
                <li>
                  <p></p>
                  <ul>
                    <li className="seedsAndServices"><strong>Seeds</strong> (and subsequently related products)</li>
                    <li className="seedsAndServices"><strong>Sustainable services</strong> (beginning with energy production provenance)</li>
                  </ul>
                </li>
                <br/>
                <br/>
                <br/>
                {/*<li>
                  <p>Incentivised P2P network scaling and innovation across both the seeds and service trade webs of:</p>
                  <ul>
                    <li><strong>Sustainable subsidies</strong></li>
                    <li><strong>Provenance trails</strong></li>
                  </ul>
                </li>*/ }
              </ul>
            </li>
          </ol>
          <div className="howIcons"><img src={minus}/><img src={network}/><img src={help}/></div>
          <div style={["width:100%; "]}><hr/></div>
      </div>

    )
  }
}

export default How
