import React, { Component } from 'react';
import './App.css';
import seed from './assets/seed.mp4'
import fb from './assets/fb.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'


class App extends Component {
  render() {
    return (
      <div>
        <video autoPlay loop id="video-background" muted>
          <source src={seed} type="video/mp4"/>
        </video>

        <div className="socialWrapper">
          <a href="http://fb.me/s33d.love" target="_blank"><img className="social" src={fb} alt="facebook"/></a>
          <a href="http://twitter.com/s33deets" target="_blank"><img className="social" src={twitter} alt="twitter"/></a>
          <a href="http://instagram.com/S33dgram/" target="_blank"><img className="social" src={instagram} alt="insta"/></a>
        </div>
      </div>
    );
  }
}

export default App;
