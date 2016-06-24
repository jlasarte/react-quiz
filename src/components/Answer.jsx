import React from 'react';

export const Answer = React.createClass({
  displayName: 'Answer',

  propTypes: {
    id: React.PropTypes.number,
    play: React.PropTypes.func,
    select: React.PropTypes.bool,
    style: React.PropTypes.string,
    text: React.PropTypes.string
  },

  handleClickAnswer() {
    this.props.play(this.props.id);
  },

  getStyleClass() {
    if(!this.props.select)
      return 'answerBlock answerBlockHover centeredElement';
    else
      return `answerBlock centeredElement ${this.props.style}`;
  },

  render() {
    return (
      <button className={this.getStyleClass()} onClick={this.handleClickAnswer}
        disabled={this.props.select} 
      >
        {this.props.text}
      </button>);
  }
});
