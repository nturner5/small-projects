//Here we render routs

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './app/App.js';
import Login from './login/Login.component.js';
import Choose_role from './choose-role/Choose_role.component.js';
import Page3 from './page3/Page3.component.js';
import Page4 from './page4/Page4.component.js';
import './main.scss';

export default class Routes extends React.Component {
	render() {
		return (
			<div>
				<Router history={hashHistory}>
					<Route path="/" component={App}>
						<IndexRoute component={Login}/>
						<Route path="choose-role" component={Choose_role}/>
						<Route path="page3" component={Page3}/>
						<Route path="page4" component={Page4}/>
					</Route>
				</Router>
			</div>
		)
	}
}

ReactDOM.render(<Routes />, document.getElementById('app'))