import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Question from './Question';
import Tally from './Tally';
import * as actionCreators from '../action_creators';

export const Game = React.createClass({
  displayName: 'Game',

  propTypes: {
    question: React.PropTypes.string,
    tally: React.PropTypes.number,
    userName: React.PropTypes.string
  },

  render: function() {
    return (
      <div className='main container'>
        <Header appName='React Quiz' />
        <div className='row'>
          <div className='col-md-6'>
            <p className='user'>Player: {this.props.userName}</p>
          </div>
          <div className='col-md-6'>
            <span className='text-right tally'>
              <Tally total={this.props.tally} />
            </span>
          </div>
        </div>
        <div className='game'>
          <Question questionText={this.props.question} />
        </div>
      </div>
    );
  }
});

const mapStateToProps = state => {
  return {
    question: state.getIn(['game', 'round', 'question']),
    tally: state.getIn(['game', 'tally']),
    userName: state.getIn(['game', 'user'])
  };
};

export const GameContainer = connect(mapStateToProps, actionCreators)(Game);
