import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Play from './Play';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/jugar' component={Play}/>
        <Route path='/' component={Home}/>
        <Route path='/home' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
