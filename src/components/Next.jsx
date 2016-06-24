import React from 'react';
import Button from './Button';

export default React.createClass({
  displayName: 'Next',

  propTypes: {
    next: React.PropTypes.func
  },

  /*
  * manage button click to pass to next round
  */
  handleButtonClick(){
    this.props.next();
  },

  render: function() {
    return (
      <Button text='Next Round' onHandleButtonClick={this.handleButtonClick} />
    );
  }
});
