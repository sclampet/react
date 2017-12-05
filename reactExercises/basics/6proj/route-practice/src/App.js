import React, { Component } from 'react';
import './App.css';
import HeaderBar from './headerBar';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
      </div>
    );
  }
}

export default App;
