import React from 'react';

export default React.createClass({
  displayName: 'Next',
  propTypes: {
  //  questionText: React.PropTypes.string
  },
  /*
  * manage button click to pass to next round
  */
  handleButtonClick(){



  },

  render: function() {
    return (
      <div className='row next-button'>
        <div className='col-md-12'>
          <button className='btn btn-lg btn-primary' onClick={this.handleButtonClick}>
            Next Round
          </button>
        </div>
      </div>
    );
  }
});
