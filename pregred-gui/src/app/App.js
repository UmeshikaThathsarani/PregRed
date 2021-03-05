import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Prediction from './pages/prediction/Prediction';

import AppHeader from './components/app-header/AppHeader';
import AppNavBar from './components/app-nav-bar/AppNavBar';

import './App.css';

function App() {
  return (
    <Router>
      <header className="app-header">
        <AppHeader />
      </header>
      <div className="app-container">
        <AppNavBar />
        <div className="app-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/prediction" component={Prediction} />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
