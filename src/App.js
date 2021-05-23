import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import City from './components/City';
import Plan from './components/Plan';

function App() {
  return (
    <>
      <Router>
      <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/city/:name' component={City} />
          <Route path='/plan/:id' component={Plan} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
