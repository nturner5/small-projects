import React from "react";

 export default class Child extends React.Component{
	 static defaultProps = {
		 name: 'Jon',
		 favPokemon: 'Pikachu'
	 }
	 static propTypes = { //this is so you can classify types, like typescript
	 }
	render() {
		return (
			<div>
			<h1>Child</h1>
				<div>{this.props.name}</div>
				<div>{this.props.favPokemon}</div>
			</div>
		)
	}
}
