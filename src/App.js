import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Landing from './pages/landing'
import Error from './pages/error'

function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route path="/" exact component={ Landing } />

        <Route path="/404" component={ Error } />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
