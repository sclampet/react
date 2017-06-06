import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

class Intro extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code />src/App.js and save to reload.
        </p>
      </div>
    );
  }
}



export default App;

