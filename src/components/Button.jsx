import React from 'react';

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    onHandleButtonClick: React.PropTypes.func,
    disabled: React.PropTypes.bool
  },
  render: function() {
    return (
      <div className='row button'>
        <div className='col-md-12'>
          <button className='btn btn-lg btn-primary center-block fadeInUp'
            onClick={this.props.onHandleButtonClick}
            disabled={this.props.disabled}
          >
              {this.props.text}
          </button>
        </div>
      </div>
    );
  }
});
