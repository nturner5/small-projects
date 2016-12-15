import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Wrapper from './Wrapper.js';
import Bulbasaur from './Bulbasaur.js';
import Pikachu from './Pikachu.js';

export default class App extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
				<Route path="/" component={Wrapper}>
					<Route path="bulbasaur/" component={Bulbasaur}/>
					<Route path="pikachu/" component={Pikachu}/>
				</Route>
			</Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))