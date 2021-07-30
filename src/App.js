import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from './components/nav'
import Landing from './pages/Landing.js'
import Discover from './pages/Discover.js'

function App() {
  return (
    <div className="App">
      <Nav/>
        <Switch>
          <Route path="/" exact component={ Landing } />
          <Route path="/discover" exact component={ Discover } />
        </Switch>
    </div>
  );
}

export default App;
