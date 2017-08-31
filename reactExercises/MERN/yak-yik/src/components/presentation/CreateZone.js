import React, { Component } from 'react';

class CreateZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zone: {
        name: '',
        zipZode: ''
      },
    };
  };

  submitZone() {
    console.log('Zone Submitted: ' + JSON.stringify(this.state.zone));
    this.props.onCreate(this.state.zone);
  };

  updateZone(event) {
    // console.log('UpdateZone: ' + event.target.id + ' === ' + event.target.value);
    let updateZone = Object.assign({}, this.state.zone);
    updateZone[event.target.id] = event.target.value;

    this.setState({
      zone: updateZone
    });

  };

  render() {
    return (
      <div>
        <h3>Create Zone</h3>
        <input id='name' onChange={this.updateZone.bind(this)} className='form-control' type='text' placeholder='Zone Name' /><br />
        <input id='zipCode' onChange={this.updateZone.bind(this)} className='form-control' type='text' placeholder='Zip Code' /><br />
        <button onClick={this.submitZone.bind(this)} className='btn btn-info'>Add New Zone</button>
      </div>
    );
  };
};
export default CreateZone;
