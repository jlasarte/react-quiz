import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import * as actionCreators from '../action_creators';
import { entries } from '../entries';

export const Results = React.createClass({

  handleButtonClick(){
    const user = this.props.userName;
    this.props.setEntries(entries);
    this.props.startGame(user);
    this.props.history.push('/game');
  },

  render: function() {
    return (
      <div className='main container-fluid'>
        <Header appName='React Quiz' />
        Results

        <div className='row next-button'>
          <div className='col-md-12'>
            <button className='btn btn-lg btn-primary center-block' onClick={this.handleButtonClick}>
              Play Again!
            </button>
          </div>
        </div>
      </div>
    );
  }
});

const mapStateToProps = state => {
  return {
    tally: state.getIn(['game', 'tally']),
    userName: state.getIn(['game', 'user'])
  };
};

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
