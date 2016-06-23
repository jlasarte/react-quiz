require('./css/bootstrap.css');
require('./css/styles.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { MainContainer } from './components/Main';
import { GameContainer } from './components/Game';
import Reducer from './core';
import Demo from './components/Demo';

const entries = [
  {
    'question': 'When was Globant founded?',
    'answers': [
      { 'id': 1, 'text': '2000' },
      { 'id': 2, 'text': '2003' },
      { 'id': 3, 'text': '2008' }
    ],
    'correctAnswer': 1
  },
  {
    'question': 'another question',
    'answers': [
      { 'id': 1, 'text': 'answer 1' },
      { 'id': 2, 'text': 'answer 2' }
    ],
    'correctAnswer': 2
  }
];
const store = createStore(Reducer);
store.dispatch({ type: 'SET_ENTRIES', entries: entries });

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer} />
      <Route path='/game' component={GameContainer} />
      <Route path='/demo' component={Demo} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
