import React from "react";
import Display from "./Display";
import {getPokemon} from './AsyncStuff';

export default class App extends React.Component{
	constructor(){ //you can call setState with out calling super
		super();
		this.state = {}
	}
	render() {
		return(
		<div>
				<input onKeyDown={this.handleOnKeyDown.bind(this)}/>
			<Display img={this.state.img}/>
		</div>
		)
	}
	handleOnKeyDown(e) {
		if ( e.keyCode == 13){
			getPokemon(e.target.value).then(response => {
				console.log(response)
				this.setState({
					img: response.data.sprites.front_shiny
				})
			})
		}	
	}
};
