import React, { Component } from 'react';
import Comment from '../presentation/Comment';
import styles from './containerStyles';

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: {
				username: '',
				body: '',
				timestamp: ''
			},

			list: [],
		};
	};

	submitComment() {
		console.log("Button Clicked!" + JSON.stringify(this.state.comment));
		
		let updateList = Object.assign([], this.state.list);
		updateList.push(this.state.comment);

		this.setState({
			list: updateList
		});
	};

	updateComment(event) {
		// console.log("updateUsername: " + event.target.value);

		let updatedComment = Object.assign({}, this.state.comment);
		updatedComment[event.target.id] = event.target.value;

		this.setState({
			comment: updatedComment
		});

	};


    render() {
    	const style = styles.comment;

    	const commentList = this.state.list.map((comment, i) => {
    		return (<li key={i}><Comment info={comment}/></li>)
    	});

        return (
            <div>
            	<h2>Zone Comments</h2>
            	<div style={style.commentsBox}>
	                <ul style={style.commentsList}>
	                	{commentList}
	                </ul>

	                <input id='username' onChange={this.updateComment.bind(this)} className='form-control' type='text' placeholder='Username' /><br />
	                <input id='body' onChange={this.updateComment.bind(this)} className='form-control' type='text' placeholder='Comment' /><br />
	                <button onClick={this.submitComment.bind(this)} className='btn btn-info'>Submit Comment</button>

            	</div>
            </div>
        );
    }
}
export default Comments;