//This component handles the App template used on every page. 
import React, {PropTypes} from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation'

class App extends React.Component {
  render() {
    return ( //props.chilren will be passed in from react-router 
      <div className="container-fluid">
        <Header />
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}

App.prototypes = {
  children: PropTypes.object.isRequired
};

export default App; 