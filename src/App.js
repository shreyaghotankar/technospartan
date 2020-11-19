import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <AppWithRouterAccess/>
      </Router>
      
    );
  }
}

export default App;
