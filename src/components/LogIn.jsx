import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';

export const LogIn = React.createClass({
  getInitialState() {
    return {
      userText: '',
      flagToPlay: true
    };
  },

  //The function decides if the user can continue
  //taking in count if the username input was filled,
  //also executes the action to set the game.
  handleButtonClick(){
    if (this.state.userText && !this.flagToPlay) {
      this.props.startGame(this.state.userText);
    }
  },

  //@params: e: Object
  //The function set the user input in a state
  //and enables or disables the play button
  //depending on the length of the input
  handleTextInput(e) {
    this.setState({ userText: e.target.value });
    this.setState({ flagToPlay: (e.target.value.length < 4) });
  },

  render() {
    return (<div>
      <label>Username</label>
      <input
        onChange={this.handleTextInput}
        type='text'
      />
      <button disabled={this.state.flagToPlay} onClick={this.handleButtonClick} >
        Play !
      </button>
    </div>);
  }	
});

export const LogInContainer = connect(null, actionCreators)(LogIn);