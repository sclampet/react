import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.yourName = 'Bob'
  }

  sayHello(name){
    return "Hello "+ name;
  }

  render() {
    return (
      <div className="App">
        <h2>My Name: { this.yourName }</h2> 
      </div>
    );
  }
}

export default App;
