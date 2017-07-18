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

	login() {
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		// console.log(email, password)
		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(email, password);

		promise
			.then(user => {
				var logout = document.getElementById('logout');
				logout.classList.remove('hide');
				this.setState({err: 'Welcome '+user.email});
			})
			.catch(e => {
				var err = e.message;
				console.log(err);
				this.setState({err: err});
			});
	};

	logout() {
		firebase.auth().signOut();

		var logout = document.getElementById('logout');
		logout.classList.add('hide'); 
		this.setState({err: 'Goodbye!'});
	};

	signup() {
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		// console.log(email, password)

		const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(email, password);

		promise
			.then(user => {
				var err = "Welcome "+user.email;
				firebase.database().ref('/users'+user.uid).set({
					email: user.email,
				});
				console.log('user: ', user)
				this.setState({err: err});
			})
			.catch(e => {
				var err = e.message;
				this.setState({err: err});
			});
	}

	google(){
		var provider = new firebase.auth.GoogleAuthProvider();

		var promise = firebase.auth().signInWithPopup(provider);
		promise
			.then(result => {
				var user = result.user;
				var msg = "Welcome "+user.displayName;
				firebase.database().ref('users/'+user.uid).set({
					email: user.email,
					name: user.displayName
				});
				this.setState({err: msg});
			})
			.catch(e => {
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
		this.logout = this.logout.bind(this);
		this.signup = this.signup.bind(this);
		this.google = this.google.bind(this);
	}

	render() {
		return (
			<div>
				<p>{this.state.err}</p>

				<input id='email' ref='email' type='email' placeholder='email' /><br />
				<input id='password' ref='password' type='password' placeholder='password' /><br />
				<button onClick={this.login}>LOGIN</button>
				<button onClick={this.signup}>SIGN-UP</button>
				<button id='logout' className='hide' onClick={this.logout}>LOGOUT</button>
				<button onClick={this.google}>LOGIN WITH GOOGLE</button>
			</div>
		);
	}
}
export default Auth;