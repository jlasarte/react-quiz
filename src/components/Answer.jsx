import React from 'react';

export const Answer = React.createClass({
  displayName: 'Answer',

  propTypes: {
    id: React.PropTypes.number,
    play: React.PropTypes.func,
    text: React.PropTypes.string
  },

  handleClickAnswer() {
    this.props.play(this.props.id);
  },

  render() {
    return (<div className='answerBlock centeredElement' onClick={this.handleClickAnswer}>
      <p>{this.props.text}</p>
    </div>);
  }
});
