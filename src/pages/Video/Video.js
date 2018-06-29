// @flow
import React, { Component } from 'react';
import ReactGA from 'react-ga';

import './Video.style.css';

function handleClick(e) {
  e.preventDefault();
  ReactGA.event({
    category: 'User',
    action: 'Created an Account',
    label: 'Game Widget',
  });
  console.log('The link was clicked.');
}

class Video extends Component<Props> {
  render() {
    return (
      <div className="video-container">
        <div>Hello</div>
        <button onClick={handleClick}>Completed!</button>
      </div>
    );
  }
}

export default Video;
