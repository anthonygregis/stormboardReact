import React from 'react'
import { Switch, Route } from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/App.css';
import Navbar from './Navbar';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={Home} />
        {/* <Route path="/login" render={} />
        <Route path="/signup" render={} /> */}
      </Switch>
    </div>
  );
}

export default App;
