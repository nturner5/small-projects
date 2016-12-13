import React from "react";
import Child from './Child.js';

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			visible: true,
			name: 'Jon' 
		}
	}
	componentWillMount(){  //renders first
		console.log('Parent willMount')
	}
	componentDidMount(){ //renders last
		console.log('Parent didMount')
	}
	render() { // renders second (if you update state only render will run again)
		console.log('Parent render')
		return (
			<div>
				<button onClick={this.changeName.bind(this)}>Add +</button>
				<button onClick={this.onOff.bind(this)}>Show/Hide Child</button>
				{this.state.visible ? <Child name={this.state.name}/> : null}
			
			</div>
		)
	}
	changeName(){
		this.setState({
			name: this.state.name + '+'
		})
	}
	onOff() {
		this.setState({
			visible: !this.state.visible
		})
	}
}
