import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Jugar from './Jugar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/jugar' component={Jugar}/>
      </Switch>
    </Router>
  );
}

export default App;
