import React from 'react';
import { connect } from 'react-redux';
import { LogIn } from './LogIn';
import Header from './Header';
import * as actionCreators from '../action_creators';

export const Main = React.createClass({
  render: function() {
    return (
      <div className='main container'>
        <Header appName='React Quiz' />
        <LogIn {...this.props}/>
        <div className='footer navbar navbar-default navbar-fixed-bottom'>
          <a href='#/demo'>Components Demo</a>
        </div>
      </div>
    );
  }
});

export const MainContainer = connect(null, actionCreators)(Main);
