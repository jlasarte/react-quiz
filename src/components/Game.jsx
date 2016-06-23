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
    answers: React.PropTypes.array,
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
          {this.props.answers.map( ans =>
            <Answer key={ans.id} id={ans.id}
              text={ans.text} play={this.props.play}
              style={ans.styleClass}
            />
          )}
        </div>
      </div>
    );
  }
});

const mapStateToProps = state => {
  const arrayAnswers = [];
  const listAnswers = state.getIn(['game', 'round', 'answers']);
  const correctAnswer = state.getIn(['game','round', 'correctAnswer']);
  const selectedAnswer = state.getIn(['game','round', 'selectedAnswer']);
  const answersClasses = [];

  //If the user has selected an answer then this if is true
  //and the styles are set for every answer.
  if(selectedAnswer >= 0){
    for(let i = 0; i < listAnswers.count(); i++){
      if(i == correctAnswer){
        answersClasses.push('correctAnswer');
      } else if(i == selectedAnswer){
        answersClasses.push('incorrectAnswer');
      } else {
        answersClasses.push('');
      }
    }
  }

  for(let i = 0; i < listAnswers.count(); i++){
    arrayAnswers.push({
      id: i,
      text: listAnswers.get(i),
      styleClass: answersClasses[i] ? answersClasses[i] : ''
    });
  }

  return {
    question: state.getIn(['game', 'round', 'question']),
    tally: state.getIn(['game', 'tally']),
    userName: state.getIn(['game', 'user']),
    answers: arrayAnswers
  };
};

export const GameContainer = connect(mapStateToProps, actionCreators)(Game);
