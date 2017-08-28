import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import { APIManager } from '../../utils';

class Zones extends Component {

	constructor(props) {
		super(props);
		this.state = {
			zone: {
				name: '',
				zipCode: ''
			},
			list: [],
		};
	}

	componentDidMount() {
		APIManager.get('/api/zone', null, (err, res) => {
			if(err) {
				alert('ERROR: '+err.message);
				return;
			};

			this.setState({
				list: res.results
			});
		});

	};

	updateZone(event) {
		// console.log('Zone Updated: '+ event.target.id + ' == ' + event.target.value);
		let updatedZone = Object.assign({}, this.state.zone);
		updatedZone[event.target.id] = event.target.value;

		this.setState({
			zone: updatedZone
		});
	};

	addZone() {
		let updatedZone = Object.assign({}, this.state.zone);
		//split the object by ',' because form body is currently a string obj; returns an array (Backend expects and array);
		updatedZone['zipCodes'] = updatedZone.zipCode.split(',');

		APIManager.post('/api/zone', updatedZone, (err, res) => {
			if(err) {
				alert('ERROR: ' + err.message)
				return;
			};

			console.log('ZONE CREATED: ' + JSON.stringify(res));

			let updatedList = Object.assign([], this.state.list);
			updatedList.push(res.result);
			//
			// this.setState({
			// 	list: updatedList
			// });


		});

	};




    render() {

    	const listItems = this.state.list.map((zone, i) => {
    		return (<li key={i}><Zone currentZone={zone} /></li>)
    	});

        return (
            <div>
                <ol>
                	{listItems}
                </ol>
                <input id='name' onChange={this.updateZone.bind(this)} className='form-control' type='text' placeholder='Zone Name' /><br />
                <input id='zipCode' onChange={this.updateZone.bind(this)} className='form-control' type='text' placeholder='Zip Code' /><br />
                <button onClick={this.addZone.bind(this)} className='btn btn-info'>Add New Zone</button>
            </div>
        );
    }
}
export default Zones;
