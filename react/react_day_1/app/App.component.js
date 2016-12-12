import ReactDOM from 'react-dom';
import React from 'react';

var App = React.createClass({ 
  getInitialState(){
    return{
      name: 'jon',
      email: "jon@jon.com",
      friends: [
        {name: 'Gus'},
        {name: 'Sterling'},
        {name: 'Cameron'},
        {name: 'Josh'}
      ],
    };
  },
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={this.clickHandler}>Update State</button> 
        <input onChange={this.inputHandler} />
        {this.state.friends
        .filter(friend => {
          return friend.name !== 'Gus'
        })
        .map((friend)=>{
          return(
            <div 
            onClick={this.friendNamer.bind(this, friend.name)}
            key={friend.name}>
              {friend.name}
            </div>
          )
        })}
      </div>
    )
  },
  inputHandler(event){
    this.setState({
      name: event.target.value
    })
  },
  clickHandler(){
    this.setState({
      name: 'Greg'
    })
  },
  friendNamer(name){
    this.setState({
      name: name
    })
  }
})

ReactDOM.render(<App />, document.getElementById("app"));
