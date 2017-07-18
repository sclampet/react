import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};

		this.onLogin = this.onLogin.bind(this);
	};

	onLogin() {
		this.props.onLogin();
	};

    render() {
        return (
            <Navbar>
            	<Navbar.Header>
            		<Navbar.Brand>
            			Github Searcher
            		</Navbar.Brand>
            	</Navbar.Header>
            	<Nav>
            		<NavItem onClick={ this.onLogin() } href='#'>LOGIN</NavItem>
            	</Nav>
            </Navbar>
        );
    }
}
export default Header;