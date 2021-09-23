import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header'
import Home from './components/home'
import Shop from './components/shop'
import About from './components/about'
import Podcast from './components/podcast'



function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='content'>
          <Switch>
              <Route path='/Shop' component={Shop} />
              <Route path='/About' component={About} />
              <Route path='/Podcast' component={Podcast} />
              <Route path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
