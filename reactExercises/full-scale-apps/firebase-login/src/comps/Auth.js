import React, { Component } from 'react';
var firebase = require('firebase');

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBLqFCUB8UhSU_MSUlHiga7HobJocbIF-w",
	authDomain: "fir-login-287d6.firebaseapp.com",
	databaseURL: "https://fir-login-287d6.firebaseio.com",
	projectId: "fir-login-287d6",
	storageBucket: "fir-login-287d6.appspot.com",
	messagingSenderId: "1010949592675"
};
firebase.initializeApp(config);

class Auth extends Component {

	login(event) {
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		// console.log(email, password)
		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(email, password);

		// TODO: handle login promise
		promise.catch(e => {
			var err = e.message;
			console.log(err);
			this.setState({err: err});
		});
	}

	constructor(props) {
		super(props);
		this.state = {
			err: '',
		}

		this.login = this.login.bind(this);
	}

	render() {
		return (
			<div>
				<p>{this.state.err}</p>

				<input id='email' ref='email' type='email' placeholder='email' /><br />
				<input id='password' ref='password' type='password' placeholder='password' /><br />
				<button onClick={this.login}>LOGIN</button>
				<button>SIGN-UP</button>
				<button>LOGOUT</button>
			</div>
		);
	}
}
export default Auth;