import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import Login from './components/login.js';
import Signup from './components/signup.js';
import Header from './components/header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/login" component={Login} exact={true}/>
            <Route path="/signup" component={Signup} exact={true}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
