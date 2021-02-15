import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Home, Signin, Signup} from './pages';


export function App() {
  return (
    <Router>
      <Switch>
        <Route path ={ROUTES.SIGN_IN}>
          <Signin/>
        </Route>

        <Route exact path= {ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        
        <Route exact path={ROUTES.BROWSE}>
          <p>browse page</p>
        </Route>
        
        <Route exact path={ROUTES.HOME}>
          <Home/>
        </Route>
      </Switch>

    </Router>
  );
}

