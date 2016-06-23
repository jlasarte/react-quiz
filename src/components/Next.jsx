import React from 'react';

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
    // se supone q debo usar this.context.router.push pero no anda :(
    //this.props.history.push('/results');
  },

  render: function() {
    return (
      <div className='row next-button'>
        <div className='col-md-12'>
          <button className='btn btn-lg btn-primary center-block' onClick={this.handleButtonClick}>
            Next Round
          </button>
        </div>
      </div>
    );
  }
});
