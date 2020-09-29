import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import AboutPage from './components/AboutPage'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about" render={()=> <AboutPage/>}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
