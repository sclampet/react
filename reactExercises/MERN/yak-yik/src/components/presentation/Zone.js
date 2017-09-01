import React, { Component } from 'react';
import styles from './presStyles';

class Zone extends Component {

  selectTitle(event) {
    console.log('click select! | zone: ' + this.props.index);
    event.preventDefault();
    this.props.select(this.props.index);
  };

  render() {
    const style = styles.zone;
    const title = (this.props.isSelected) ? <a style={style.a} href='#'>{this.props.currentZone.name}</a> : <a href='#'>{this.props.currentZone.name}</a>;
    return (
      <div>
    		<div style={style.container}>
    			<h2 onClick={this.selectTitle.bind(this)} style={style.h2}>{ title }</h2>
    			<span className='detail'>{this.props.currentZone.zipCodes}</span><br />
    			<span className='detail'>Comments: {this.props.currentZone.numComments}</span>
    		</div>
      </div>
    );
  }
}

export default Zone;
