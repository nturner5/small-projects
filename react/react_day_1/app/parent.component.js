
import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child.component.js'
  
var Parent = React.createClass({
  getInitialState(){
    return{
      name: 'Jon'
    }
  },
  render() {
    return (
    <div>
      {this.state.name}
      <Child 
      changeName={this.changeName}
      supername={this.state.name}/>
    </div>
    )
  },
  changeName(name){
    this.setState({
      name:name
    })
  }
})


ReactDOM.render(<Parent/>, document.getElementById('app'));