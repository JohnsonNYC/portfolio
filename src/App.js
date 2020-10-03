import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import PortfolioPage from './components/PortfolioPage'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about" render={()=> <AboutPage/>}/>
        <Route path="/portfolio" render={()=> <PortfolioPage/>}/>
        <Route path="/blog" render={()=> <BlogPage />} />
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
