import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Question from './Question';
import Tally from './Tally';
import { Answer } from './Answer';
import * as actionCreators from '../action_creators';

export const Game = React.createClass({
  displayName: 'Game',

  propTypes: {
    answer1Id: React.PropTypes.number,
    answer1Text: React.PropTypes.string,
    answer2Id: React.PropTypes.number,
    answer2Text: React.PropTypes.string,    
    answer3Id: React.PropTypes.number,   
    answer3Text: React.PropTypes.string,
    play: React.PropTypes.func,
    question: React.PropTypes.string,
    tally: React.PropTypes.number,
    userName: React.PropTypes.string  
  },

  render() {
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
          <Answer text={this.props.answer1Text} id={this.props.answer1Id}
            play={this.props.play} 
          />
          <Answer text={this.props.answer2Text} id={this.props.answer2Id}
            play={this.props.play} 
          />
          <Answer text={this.props.answer3Text} id={this.props.answer3Id}
            play={this.props.play} 
          />
        </div>
      </div>
    );
  }
});

const mapStateToProps = state => {
  return {
    question: state.getIn(['game', 'round', 'question']),
    tally: state.getIn(['game', 'tally']),
    userName: state.getIn(['game', 'user']),
    answer1Text: state.getIn(['game', 'round', 'answers']).get(0),
    answer1Id: 0,
    answer2Text: state.getIn(['game', 'round', 'answers']).get(1),
    answer2Id: 1,
    answer3Text: state.getIn(['game', 'round', 'answers']).get(2),
    answer3Id: 2
  };
};

export const GameContainer = connect(mapStateToProps, actionCreators)(Game);
