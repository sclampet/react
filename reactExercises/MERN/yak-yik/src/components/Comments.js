import React, { Component } from 'react';
import Comment from './Comment';
import styles from './styles';

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{body: 'comment 1', username: 'dtrump', timestamp: '10:30'},
				{body: 'comment 2', username: 'hclinton', timestamp: '10:30'},
				{body: 'comment 3', username: 'gjohnson', timestamp: '10:30'},
			],
		};
	}

    render() {
    	const style = styles.comment;

    	const commentList = this.state.list.map((comment, i) => {
    		return (<li><Comment info={comment}/></li>)
    	});

        return (
            <div>
            	<h2>Zone Comments</h2>
            	<div style={style.commentsBox}>
	                <ul style={style.commentsList}>
	                	{commentList}
	                </ul>
            	</div>
            </div>
        );
    }
}
export default Comments;