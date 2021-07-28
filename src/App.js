import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Nav from './components/nav'
import Footer from './components/footer'
import Error from './components/error'
import Landing from './pages/landing'

function App() {
  return (
    <div className="App">
      <Nav/>
        <Switch>
          
          <Route path="/" exact component={ Landing } />

          <Route path="/404" component={ Error } />
          <Redirect to="/404" />
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
