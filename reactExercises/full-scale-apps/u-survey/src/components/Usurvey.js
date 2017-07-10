import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

// Initialize Firebase
var config = {
	apiKey: "AIzaSyCgv24PwVWD9Fu49hZDGa3LwtAI0kc5upc",
	authDomain: "u-survey-5d518.firebaseapp.com",
	databaseURL: "https://u-survey-5d518.firebaseio.com",
	projectId: "u-survey-5d518",
	storageBucket: "u-survey-5d518.appspot.com",
	messagingSenderId: "1082490099883"
};
firebase.initializeApp(config);

class Usurvey extends Component {

	nameSubmit() {
		var studentName = this.refs.name.value;
		this.setState({studentName: studentName}, () => {
			console.log(this.state);
		})
	};

	questionSubmit() {
		console.log("Question Submit")
		firebase.database().ref('uSurvey/'+this.state.uid).set({
			studentName: this.state.studentName,
			answers: this.state.answers,
		});
		this.setState({isSubmitted: true});
	};

	answerSelected(event) {
		var answers = this.state.answers;
		if(event.target.name === 'answer1'){
			answers.answer1 = event.target.value;
		} else if(event.target.name === 'answer2'){
			answers.answer2 = event.target.value;
		} else if(event.target.name === 'answer3'){
			answers.answer3 = event.target.value;
		}

		this.setState({answers: answers}, function() {
			// console.log(this.state.answers);
		})

	}

	constructor(props) {
		super(props);
		this.state = {
			uid: uuid.v1(),
			studentName: '',
			answers: {
				answer1: '',
				answer2: '',
				answer3: '',
			} ,
			isSubmitted: false,
		};

		this.nameSubmit = this.nameSubmit.bind(this);
		this.questionSubmit = this.questionSubmit.bind(this);
		this.answerSelected = this.answerSelected.bind(this);

	}

render() {
	var studentName;
	var questions;
	var answers;

	if(!this.state.studentName && !this.state.isSubmitted){
		studentName = <div>
			<h1>Hey student, please tell us your name!</h1>
			<form onSubmit={this.nameSubmit}>
				<input className='namy' type='text' placeholder='Enter your name' ref='name' />
			</form>
		</div>;
		questions = '';
	} else if(this.state.studentName && !this.state.isSubmitted){
		studentName = <h1>Hey there, {this.state.studentName}</h1>
		questions = <div>
			<h2>Here are some questions!</h2>
			<form onSubmit={this.questionSubmit}>
				<div className='card'>
					Which kind course do you like the most?<br />
					<input type='radio' name='answer1' value='technology' onChange={this.answerSelected} />Tech
					<input type='radio' name='answer1' value='design' onChange={this.answerSelected} />Design
					<input type='radio' name='answer1' value='marketing' onChange={this.answerSelected} />Marketing
				</div>
				<div className='card'>
					Are you looking for work?<br />
					<input type='radio' name='answer2' value='yes' onChange={this.answerSelected} />Yes
					<input type='radio' name='answer2' value='no' onChange={this.answerSelected} />No
				</div>
				<div className='card'>
					Is online learning helpful?<br />
					<input type='radio' name='answer3' value='yes' onChange={this.answerSelected} />Yes
					<input type='radio' name='answer3' value='no' onChange={this.answerSelected} />No
					<input type='radio' name='answer3' value='idk' onChange={this.answerSelected} />Idk
				</div>
				<input className='feedback-button' type='submit' value='submit' />
			</form>
		</div>
	} else if(this.state.isSubmitted) {
		studentName = <h1>Thanks, {this.state.studentName}</h1>
		answers = <div>
			<p>Answer1: {this.state.answers.answer1}</p>
			<p>Answer2: {this.state.answers.answer2}</p>
			<p>Answer3: {this.state.answers.answer3}</p>
		</div>
	}

	return (
		<div>
			{studentName}
			------------------------
			{questions}
			{answers}
		</div>
		);
	}
}
export default Usurvey;