import React from 'react';

export const Answer = React.createClass({
  handleClickAnswer() {
    this.props.Play(this.props.Id);
  },

  render() {
    return (<div className="answerBlock" onClick={this.handleClickAnswer}>
        <p>{this.props.Text}</p>
      </div>)
  }
})
