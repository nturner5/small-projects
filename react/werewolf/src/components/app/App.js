// Here we render jsx and subroutes 
import React from 'react';
import { Link } from 'react-router';
// import Nav from '../'
  //  <Link to="/">Login</Link>
//    <Link to="/choose-role">Choose Role</Link>
//    <Link to="/page3">Page 3</Link>
//    <Link to="/page4">Page 4</Link>

export default class App extends React.Component{
  render(){
    return(
      <div className = "app">
     
        {this.props.children}
      </div>
    )
  }
}