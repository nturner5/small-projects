//Display a list of friends
//Show an 'active' friends info 
//Be able to switch between friends

import ReactDOM from 'react-dom';
import React from 'react';

var Mini = React.createClass({
  getInitialState(){
    return{
      activeFriend: {},
      friends: [
        {
          name: 'Devin Oliver',
          email: 'devin@gmail.com'
        },
        {
          name: 'Brendon Urie',
          email: 'brendon@gmail.com'
        },
        {
          name: 'Chad Petree',
          email: 'chad@gmail.com'
        }
      ],
      showEmail: false
    }
  },
  render(){
    return(
      <div>
        <button onClick={this.toggleEmail}>Show Email</button>
        {this.state.friends
        .map(friend =>{
          return(
            <div 
            key={friend.name}
            onClick={this.makeFriendActive.bind(this, friend)}  
            >
              <section>
              <div>{friend.name}</div>
              <div>{this.state.showEmail ? friend.email : null}</div>
              </section>
            </div>
          )
        })  
        }
        <h1>
        <div>{this.state.activeFriend.name}</div>
      </h1>
      </div>
    )
  },
  makeFriendActive(friend){
    this.setState({
      activeFriend: friend
    })
  },
  toggleEmail(){
    this.setState({
      showEmail: !this.state.showEmail
    })
    
  }
}); // end of Mini Componenet 

ReactDOM.render(<Mini/>, document.getElementById('app'))