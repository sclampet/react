import React, { Component } from 'react';
import styles from './presStyles';

class Zone extends Component {
    render() {
    	const style = styles.zone;
        return (
            <div>
          		<div style={style.container}>
          			<h2 style={style.h2}><a style={style.a} href='#'>{this.props.currentZone.name}</a></h2>
          			<span className='detail'>{this.props.currentZone.zipCode}</span><br />
          			<span className='detail'>Comments: {this.props.currentZone.numComments}</span>
          		</div>
            </div>
        );
    }
}

export default Zone;
