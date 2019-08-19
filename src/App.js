import React from 'react';

import './App.scss';

import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignUpPage';

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login/" component={LoginPage} />
        <Route path="/signUp/" component={SignUpPage} />
      </div>
    </Router>
  );
}

export default App;
