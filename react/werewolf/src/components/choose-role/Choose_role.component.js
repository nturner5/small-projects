import React from 'react';
import { Link } from 'react-router';
export default class Choose_role extends React.Component {
	constructor(){
		super();
		this.state = {};
	}
	componentWillMount(){
	}
	render() {
		return (
			<div className="Choose_role">
				<img className="werewolfImg" src="http://www.pngmart.com/files/3/Werewolf-PNG-HD.png" />
				<Link className="mainButton" to="/choose-role"><div >Player</div></Link>
				<Link className="mainButton" to="/choose-role"><div >Moderator</div></Link>
				<Link to="/"><img className="backButton" src="http://www.cmmarchitects.co.uk/wp-content/uploads/2014/07/circle_back_arrow-5121.png" /></Link>
			</div>
		)	
	}
};