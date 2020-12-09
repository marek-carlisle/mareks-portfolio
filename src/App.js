import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

import './App.css';

class App extends Component {

  render() {
    return (
      <>
        <div id='header'>
          <h1 id='nameHeader'>Marek Carlisle</h1>
          <p id='descHeader'><i>Learning full stack web development</i></p>
        </div>

        <Router>
          <Navbar />
          <Switch>

            <Redirect exact from="/" to="/home" />

            <Route path="/home" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />

          </Switch>
        </Router>

      </>
    )
  }

}

export default App;
