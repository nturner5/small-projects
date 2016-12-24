import React from 'react';
import { Link } from 'react-router';
export default class Login extends React.Component {
	constructor(){
		super();
		this.state = {};
	}
	componentWillMount(){
	}
	render() {
		return (
			<div className = "Login">
				<img src="http://www.pngmart.com/files/3/Werewolf-PNG-HD.png" />
				<input placeholder="username"/>
				<input placeholder="password"/>
				<Link to="/choose-role"><div >Login</div></Link>
				<Link to="/choose-role"><div >Create Account</div></Link>
			</div>
		)	
	}
};