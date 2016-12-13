import React from "react";

export default class Child extends React.Component{
	componentWillMount(){
		console.log('Child WillMount')
	}
	componentDidMount(){
		console.log('Child DidMount')
	}
	componentWillUnmount(){
		console.log('child willUnmount')
	}
	componentWillReceiveProps(nextProps){
		console.log('child -old -', this.props.name)
		console.log('child -new -', nextProps.name)
	}
	render() {
		console.log('Child Render')
		return (
			
			<h1>
			{this.props.name}
			Child Component
			</h1>
		)
	}
}
