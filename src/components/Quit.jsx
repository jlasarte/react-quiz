import React from 'react';
import Button from './Button';

export default React.createClass({
  displayName: 'Quit',

  handleButtonClick(){
    this.props.history.push('/');
  },

  render(){
    return (
      <Button text='Quit' onHandleButtonClick={this.handleButtonClick} disabled={false}/>
    )
  }

});
