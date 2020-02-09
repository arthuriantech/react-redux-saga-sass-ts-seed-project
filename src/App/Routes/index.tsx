import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {Home} from './Home';

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
