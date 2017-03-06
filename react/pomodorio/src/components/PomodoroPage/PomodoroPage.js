import React from 'react';
import {Link} from 'react-router'; 
import LeftSidebar from './LeftSidebar'
import DailyTracker from './DailyTracker';
import WeeklyTracker from './WeeklyTracker';
import YearlyTracker from './YearlyTracker';
import Start from './Start';
import Timer from './Timer';

class PomodoroPage extends React.Component {
  

  render(){
    return (
      <div className="jumbotron">
        <h1>Main Page</h1>
        <p>React and SVG animations</p>
        <DailyTracker />
        <LeftSidebar />
        <WeeklyTracker />
        <YearlyTracker />
        <Start />
        <Timer />
      </div>
    );
  }
}
 
export default PomodoroPage; 



