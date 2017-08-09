import React, { Component } from 'react';
import Zone from './Zone';

class Zones extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [
				{name: 'Zone 1', zipCode: '10012', numComments: 10},
				{name: 'Zone 2', zipCode: '10013', numComments: 23},
				{name: 'Zone 3', zipCode: '10014', numComments: 1},
				{name: 'Zone 4', zipCode: '10015', numComments: 43},
				{name: 'Zone 5', zipCode: '10016', numComments: 3},
			],
		};
	}

    render() {

    	const listItems = this.state.list.map((zone, i) => {
    		return (<li><Zone currentZone={zone} /></li>)
    	});

        return (
            <div>
                <ol>
                	{listItems}
                </ol>
            </div>
        );
    }
}
export default Zones;