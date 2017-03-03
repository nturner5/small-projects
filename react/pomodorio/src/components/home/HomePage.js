import React from 'react';
import {Link} from 'react-router'; 
import Clock from './Clock';

class HomePage extends React.Component {
  

  render(){
    return (
      <div className="jumbotron">
        <h1>Clock App</h1>
        <p>React and SVG animations</p>
        <Clock />
      </div>
    );
  }
}

export default HomePage; 



