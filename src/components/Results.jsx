import React from 'react';
import { connect } from 'react-redux';
import { LogIn } from './LogIn';
import Header from './Header';
import * as actionCreators from '../action_creators';

export const Results = React.createClass({
  render: function() {
    return (
      <div className='main container-fluid'>
        <Header appName='React Quiz' />
        Results
      </div>
    );
  }
});

export const ResultsContainer = connect(null, actionCreators)(Results);
