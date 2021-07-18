import React, {Suspense} from 'react';
import {Switch, Route} from 'react-router-dom'
// import './App.css';

const HomePage = React.lazy(() => import("./components/HomePage"))
const AboutPage = React.lazy(() => import("./components/AboutPage"))
const BlogPage = React.lazy(() => import("./components/BlogPage"))
const PortfolioPage = React.lazy(() => import("./components/PortfolioPage"))
const LoadingPage = () => <div>Loading Page</div>

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route path="/about" render={()=> <AboutPage/>}/>
          <Route path="/portfolio" render={()=> <PortfolioPage/>}/>
          <Route path="/blog" render={()=> <BlogPage />} />
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
