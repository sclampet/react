import React, { Component } from 'react';
import {Zone, CreateZone} from '../presentation';
import { APIManager } from '../../utils';

class Zones extends Component {

	constructor(props) {
		super(props);
		this.state = {
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

	addZone(zone) {
		let updatedZone = Object.assign({}, zone);
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
			this.setState({
				list: updatedList
			});
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
								<CreateZone onCreate={this.addZone.bind(this)} />
					</div>
        );
    }
}
export default Zones;
