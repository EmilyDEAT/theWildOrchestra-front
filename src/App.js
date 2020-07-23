import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Agenda from './components/Agenda';
import Header from './components/Header';
import Presentation from './components/Presentation';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Presentation} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/musiciens" />
      </Switch>
    </div>
  );
}

export default App;
