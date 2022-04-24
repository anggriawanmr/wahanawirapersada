import React from 'react';
import { SubHeading } from '../../components';

import { videoheader } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="showcase" id="home">
    <div className="video-container">
      <div className="app__video-overlay"></div>
      <video autoPlay loop muted>
        <source src={videoheader} type="video/mp4" />
      </video>
    </div>
    <div className="app__header-h1">
      <div className="first-word headtext__cormorant">
        <h1>The Most</h1>
        <div className="animated-words">
          <span className="animated-word">Agile</span>
          <span className="animated-word">Trusted</span>
          <span className="animated-word">Nimble</span>
          <span className="animated-word">Growing</span>
          <span className="animated-word">Dedicated</span>
          <span className="animated-word">Collaborative</span>
        </div>
      </div>

      <div className="last-word headtext__cormorant">
        <p>Waste Water Treatment Plant</p>
      </div>
      <p className="p__opensans p_details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
);

export default Header;
