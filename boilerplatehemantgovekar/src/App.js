import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users/Users';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;