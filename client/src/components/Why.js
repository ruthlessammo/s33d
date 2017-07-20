import React, { Component } from 'react';
import Grid from 'react-css-grid';

class Why extends Component {
  render() {
    return (
      <div className="whyContainer">

        <Grid col={6}>
          <h2 className="aim">Aim: Re-associating the supply chain</h2>
            <p className="quote">
              It is now highly visible to take care of everybody on Earth at a higher standard of living than any other have ever known. It no longer has to be you or me. Selfishness is unnecessary. War is obsolete. It is a matter of converting high technology from weaponary to livingry. <br/><br/><span className="buck">Buckminster Fuller</span></p>
        </Grid>

          <Grid col={6}>
            <p className="tradeLegacy">
              The legacy trade paradigm and subsequently the way the worlds value systems have been calibrated no longer serve the full potential of the the planet and its diverse range of inhabitants. Within the new trade paradigm of creative programmable capital we are able to fulfil a long term human vision of amplifying and preserving the value of the earths natural stores.
            </p>
          </Grid>

      </div>

    )
  }
}

export default Why