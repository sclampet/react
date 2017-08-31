import React, { Component } from 'react';
import { Comment, CreateComment } from '../presentation';
import styles from './containerStyles';
import { APIManager } from '../../utils';

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
		};
	};

	componentDidMount() {
		APIManager.get('/api/comment', null, (err, res) => {
			if(err) {
				alert('ERROR: '+err.message);
				return;
			};

			this.setState({
				list: res.results
			});
		});
	};

	submitComment(comment) {
		// console.log("Button Clicked! Comment being passed = " + JSON.stringify(comment));

		APIManager.post('/api/comment', comment, (err, res) => {
			if(err) {
				alert('Error: ' + err);
				return;
			};

			console.log(JSON.stringify(res));

			let updateList = Object.assign([], this.state.list);
			updateList.push(res.result);

			this.setState({
				list: updateList
			});

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
									<CreateComment onCreate={this.submitComment.bind(this)} />
            	</div>
            </div>
        );
    }
}
export default Comments;
