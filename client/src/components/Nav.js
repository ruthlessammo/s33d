import React, { Component } from 'react';
import '../css/App.css';
import FontAwesome from 'react-fontawesome';
import fb from '../assets/fb.png';
import tw from '../assets/tw.png';
import insta from '../assets/insta.png';



class Nav extends Component{
  constructor() {
    super();
    this.state = {};
    this.burgerToggle = this.burgerToggle.bind(this);
  }

  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
  }

  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
              <a href="https://www.facebook.com/s33d.love/" target="_blank"><img src={fb}/></a>
              <a href="https://twitter.com/s33deets" target="_blank"><img src={tw}/></a>
              <a href="https://www.instagram.com/S33dgram/" target="_blank"><img src={insta}/></a>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}>
          <FontAwesome
            className='fa fa-bars'
            name='fa-bars'
            size='2x'
            onClick={this.burgerToggle}
          />
          </i>
            <div className="narrowLinks">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
      </nav>
    );
  }
}

export default Nav
