import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>propNumber is: { this.props.propNumber }</h3>
        <h3>propObject is: { this.props.propObject.obj1 }</h3>
        <h3>propString is: { this.props.propString }</h3>
        <Parent />
      </div>
    );
  }
}


App.propTypes = {
  propObject: React.PropTypes.object,
  propString: React.PropTypes.string,
  propNumber: React.PropTypes.number,
  propArray: React.PropTypes.array,
}

App.defaultProps = {
  propNumber: 3,
  propString: 'This is prop string',
  propObject: {obj1: 'Obj1', obj2: 'Obj2', obj3: 'Obj3'}
}


class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: ['s-BMW', 's-Ford', 's-Toyota'],
    };
  }
  handleClick() {
    this.setState({ cars: this.state.cars.reverse() });
  }

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick.bind(this)}>Just some info</h2>
        <Cars  msg="cars are cool" model="23456" coolCars={ this.state.cars }/>
      </div>
    );
  }
}


Parent.defaultProps = {
  cars: ['BMW', 'Ford', 'Toyota'],
}

class Cars extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <h3>I am from the cars component.</h3>
        <p>{ this.props.msg } Model: { this.props.model }</p>
        <div> { this.props.coolCars.map((item, i) => {
            return <p key={i}>{ item }</p>;
          }) }
        </div>
      </div>
    );
  }
}

export default App;
