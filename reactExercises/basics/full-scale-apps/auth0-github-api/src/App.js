import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idToken: '',
      profile: {}
    };
  }

  static defaultProps = {
    clientID: '12PVBM3ssqMfCmggt2K8Ti2VNc28LYsv',
    domain: 'sclampet.auth0.com'
  }

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authResult) => {
      console.log(authResult);
    });
  }

  showLock() {
    this.lock.show();
  }

  login() {

  }


  render() {
    return (
      <div className="App">
        <Header 
          onLogin={ this.showLock.bind(this) }/>
        <Github />
      </div>
    );
  }
}

export default App;
