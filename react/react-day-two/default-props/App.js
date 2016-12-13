import React from "react";
import Child from './Child.js'
export default class App extends React.Component{
	render() {
		return (
			<div>
				<h1>App</h1>
				<Child />
			</div>
		)	
	}
}
