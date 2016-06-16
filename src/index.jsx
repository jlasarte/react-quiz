import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LogInContainer } from './components/LogIn';
import { createStore } from 'redux';
import Reducer from './core';
import { List, Map } from 'immutable';

//Initial state for the store.
//Questions might be larger
const initialState = Map({
  entries: Map({
    round1: Map({
      question: 'When was Globant founded?',
      answers: List.of('2000', '2003', '2008'),
      correctAnswer: 1
    })
  }),
  game: Map({
    user: '',
    round: null,
    tally: null
  })
});

const store = createStore(Reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <LogInContainer /> 
  </Provider>,
  document.getElementById('app')
);
