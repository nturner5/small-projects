import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import PomodoroPage from './components/PomodoroPage/PomodoroPage';
import SettingsPage from './components/SettingsPage/SettingsPage';

export default (
  <Route path="/" components={App}>
    <IndexRoute component={PomodoroPage} />
    <Route path="settings" component={SettingsPage} />
  </Route>
); 