import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Question from './Question';
import Tally from './Tally';
import * as actionCreators from '../action_creators';

export const Game = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Header appName='React Quiz' />
        <div className='row'>
          <div className='col-md-10 col-md-offset-9'>
            <Tally total={this.props.tally} />
          </div>
        </div>    
        <div className='game'>
          <Question text={this.props.question} />
        </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    question: state.getIn(['game', 'round', 'question']),
    tally: state.getIn(['game', 'tally']),
  }
}

export const GameContainer = connect(mapStateToProps, actionCreators)(Game);
