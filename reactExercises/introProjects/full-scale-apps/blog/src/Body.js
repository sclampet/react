import React, { Component } from 'react';
import Services from './Services';
import Getstarted from './Getstarted';
import Gallery from './Gallery';
import Download from './Download';

class Body extends Component {
  render() {
    return (
      <div>
        <Getstarted />
        <Services />
        <Gallery />
        <Download />
      </div>
    );
  }
}
export default Body;