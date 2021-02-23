import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Home, Signin, Signup, Browse} from './pages';
import {useAuthListener} from './hooks';
import {IsUserRedirect, ProtectedRoute} from './helpers/routes';

export function App() {
  const {user} = useAuthListener();
  // console.log(user);
  return ( 
    <Router>
      <Switch>
        <isUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin/>
        </isUserRedirect>

        <isUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </isUserRedirect>
        
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        
        <isUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home/>
        </isUserRedirect>
      </Switch>

    </Router>
  );
}

