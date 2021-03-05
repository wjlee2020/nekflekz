import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import {App} from './App';
import {GlobalStyles} from './global-styles';
import {FirebaseContext} from './context/firebase';
// import { seedDatabase } from './seed'

const config = {
  apiKey: "GET YOUR OWN",
  authDomain: "nekflekz.firebaseapp.com",
  projectId: "nekflekz",
  storageBucket: "nekflekz.appspot.com",
  messagingSenderId: ">>>>>><<<<<<",
  appId: "NOT ALLOWED, BUT YOU COULD STILL FIND IT"
}

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase: window.firebase}}>
      <GlobalStyles/>
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
