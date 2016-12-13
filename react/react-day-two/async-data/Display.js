import React from "react";

export default React.createClass({
	render() {
		return (
			<div>
				{this.props.img ? <img src={this.props.img}/> : null}
			</div>
		)	
	}
})
