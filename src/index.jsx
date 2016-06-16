require('./css/bootstrap.css');
require('./css/styles.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Main from './components/Main';
import Demo from './components/Demo';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main} />
    <Route path='/demo' component={Demo} />
  </Router>,
  document.getElementById('app')
);
