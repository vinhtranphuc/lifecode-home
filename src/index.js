import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import getAppStore from "./store"

const store = getAppStore();

const template = (
    <Provider store = {store}>
       <Router>
          <App/>
        </Router>
    </Provider>
  );

ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
