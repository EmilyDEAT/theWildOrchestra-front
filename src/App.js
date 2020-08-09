import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Agenda from './components/Agenda/Agenda'
import Header from './components/Header'
import MusiciansList from './components/Musicians/MusiciansList'
import Presentation from './components/Home/Presentation'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Presentation} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/musiciens" component={MusiciansList} />
      </Switch>
    </div>
  )
}

export default App
