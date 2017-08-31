import React, { Component } from 'react';

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        username: '',
        body: '',
      },
    };
  };

  submitComment() {
    console.log('Submitting Comment: ' + JSON.stringify(this.state.comment));
    this.props.onCreate(this.state.comment);
  };

  updateComment(event) {
    // console.log('UpdateComment: ' + event.target.id + ' === ' + event.target.value);
    let updateComment = Object.assign({}, this.state.comment);
    updateComment[event.target.id] = event.target.value;

    this.setState({
      comment: updateComment
    });

  };

  render() {
    return (
      <div>
        <h3>Create Comment</h3><br />
        <input id='username' onChange={this.updateComment.bind(this)} className='form-control' type='text' placeholder='Username' /><br />
        <input id='body' onChange={this.updateComment.bind(this)} className='form-control' type='text' placeholder='Comment' /><br />
        <button onClick={this.submitComment.bind(this)} className='btn btn-info'>Submit Comment</button>
      </div>
    );
  };
};
export default CreateComment;
