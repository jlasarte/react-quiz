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
    answersId: React.PropTypes.array,
    answersText: React.PropTypes.array,
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
          <Answer text={this.props.answersText[0]} id={this.props.answersId[0]}
            play={this.props.play} 
          />
          <Answer text={this.props.answersText[1]} id={this.props.answersId[1]}
            play={this.props.play} 
          />
          <Answer text={this.props.answersText[2]} id={this.props.answersId[2]}
            play={this.props.play} 
          />
        </div>
      </div>
    );
  }
});

const mapStateToProps = state => {
  const arrayAnswers = [];
  const listAnswers = state.getIn(['game', 'round', 'answers']);
  for(let i = 0; i < 3; i++){
    arrayAnswers.push(listAnswers.get(i));
  }

  return {
    question: state.getIn(['game', 'round', 'question']),
    tally: state.getIn(['game', 'tally']),
    userName: state.getIn(['game', 'user']),
    answersId: [0,1,2],
    answersText: arrayAnswers
  };
};

export const GameContainer = connect(mapStateToProps, actionCreators)(Game);
