import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';
// import {JumbotronContainer} from './containers/jumbotron';
// import {FooterContainer} from './containers/footer';
import {Home} from './pages/home';


export function App() {
  return (
    <Router>
      <Switch>
        <Route path ={ROUTES.SIGN_IN}>
          <p>Sign In Page</p>
        </Route>

        <Route exact path= {ROUTES.SIGN_UP}>
          <p>signup page</p>
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

