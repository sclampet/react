import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class headerBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Logo</Link></li>
          <li><Link to='/One'>Browse</Link></li>
          <li><Link to='/Two'>Creator Dashboard</Link></li>
          <li><Link to='/Three'><i class="fa fa-user" aria-hidden="true"></i></Link></li>
        </ul>
      </div>
    );
  }
}
export default headerBar;