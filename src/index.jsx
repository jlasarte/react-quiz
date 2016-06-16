require('./css/bootstrap.css');
require('./css/styles.css');

import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';

ReactDOM.render(
  <Main appName='React Quiz' /> ,
  document.getElementById('app')
);
