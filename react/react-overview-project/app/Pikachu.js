import React from 'react';
import { Link } from 'react-router';
import {getPokemon} from './poke.resources.js';

export default class Pikachu extends React.Component {
	constructor(){
		super();
		this.state = {};
	}
	componentWillMount(){
		console.log('fetching data...')
		getPokemon('pikachu').then(response => {
			this.setState({
				imgUrl: response.data.sprites.front_default
			})
		})
	}
	render() {
		return (
			<div>
				<h2>Pikachu</h2>
				{this.state.imgUrl ? <img src={this.state.imgUrl}/> : <img src="https://i.stack.imgur.com/h6viz.gif" />}
			</div>
		)	
	}
};


