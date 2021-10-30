import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './scss/index.scss';
import state from './state/state';
import App from './App';
import {Provider} from 'react-redux';
import createStore from './store'

const store = createStore();

ReactDOM.render( 
<React.StrictMode >
    <Router >
      <Provider store = { store }>
        <App appState={state} />
      </Provider>
    </Router>  
</React.StrictMode > ,
    document.getElementById('root')
);