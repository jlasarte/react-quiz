import React from 'react';

export const LogIn = React.createClass({
  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },

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
      this.context.router.push('/game')
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
    return (
      <div className='login'>
        <div className='row'>
          <div className='col-md-12'>
            <label className='login-label'>Username</label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <input className='login-input'
              onChange={this.handleTextInput}
              type='text'
            />
          </div>
        </div>
        <div className='row login-play-button'>
          <div className='col-md-12'>
            <button className='btn btn-lg btn-primary' disabled={this.state.flagToPlay} onClick={this.handleButtonClick} >
              Play !
            </button>
          </div>
        </div>
      </div>);
  }
});
