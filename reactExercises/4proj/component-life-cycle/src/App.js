import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Component Life Cycle</h2>
        </div>
        <Body />
      </div>
    );
  }
}


class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randNum: 0,
    };

    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber() {
    // console.log("random number called");
    this.setState({ randNum: Math.floor(Math.random() * 10) })
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Numbers myNumber={this.state.randNum}/>

      </div>
    );
  }
}



class Numbers extends Component {
  componentWillMount() {
    console.log("Numbers Component Will Mount");
  }

  componentDidMount() {
    console.log("Numbers Component Did Mount");
  }

  componentWillReceiveProps(newProps) {
    console.log("Numbers Component Will Receive Props"); 
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("Should component Update");
    return true;
  }

  componentWillUpdate(newProps, newState) {
    console.log("Will component Update")

  }

  componentDidUpdate(newProps, newState) {
    console.log("Did component Update")
    
  }

  componentWillUnmount() {
    console.log("Will component Unmount")
    
  }

  render() {
    return (
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}



export default App;
