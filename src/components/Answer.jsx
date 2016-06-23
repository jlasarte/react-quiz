import React from 'react';

export const Answer = React.createClass({
  displayName: 'Answer',

  propTypes: {
    id: React.PropTypes.number,
    play: React.PropTypes.func,
    style: React.PropTypes.string,
    text: React.PropTypes.string
  },

  handleClickAnswer() {
    this.props.play(this.props.id);
  },

  getStyleClass() {
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
