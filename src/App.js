import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Homepage from './pages/homepage.js'
import Research from './pages/research.js'

function App() {
  return (
    <div>
        <Switch>
          <Route path="/" exact component={ Homepage } />
          <Route path="/tell-us-more" exact component={ Research } />
        </Switch>
    </div>
  );
}

export default App;
