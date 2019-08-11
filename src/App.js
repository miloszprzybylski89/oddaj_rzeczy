import React from 'react';

import './App.scss';

import LandingPage from './views/LandingPage';
import Login from './views/Login';
import SignUp from './views/SignUp';

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login/" component={Login} />
        <Route path="/signUp/" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
