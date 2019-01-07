import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import List from './components/List.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import ResetPassword from './components/ResetPassword.js';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          <Route path='/log_in' component={Login}/>
          <Route path='/sign_up' component={Signup}/>
          <Route path='/reset_password' component={ResetPassword}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
