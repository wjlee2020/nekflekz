import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import {App} from './App';
import {GlobalStyles} from './global-styles';
import {FirebaseContext} from './context/firebase';

const config = {
  apiKey: "AIzaSyCG1dKKmo2YZ2Vt5fUXGDmA7nQ2oLLKkMU",
  authDomain: "nekflekz.firebaseapp.com",
  projectId: "nekflekz",
  storageBucket: "nekflekz.appspot.com",
  messagingSenderId: "19233522750",
  appId: "1:19233522750:web:061553ab0e9c29a86efd6f"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase: window.firebase}}>
      <GlobalStyles/>
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);