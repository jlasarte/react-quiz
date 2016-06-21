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
import { List, Map } from 'immutable';

const entries = [
  {
    'question': 'When was Globant founded?',
    'answers': [
      '2000',
      '2003',
      '2008'
    ],
    'correctAnswer': 1
  },
  {
    'question': 'another question',
    'answers': [
      'answer1',
      'answer2',
      'answer2'
    ],
    'correctAnswer': 2
  }
];
const store = createStore(Reducer);
store.dispatch({type: 'SET_ENTRIES', entries: entries});

store.subscribe(function(){
  console.log(store.getState());
});

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
