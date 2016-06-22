import React from 'react';

export default React.createClass({
  propTypes: {
    total: React.PropTypes.number
  },
  render: function() {
    return (
      <h2><span className='label label-default'>Points: {this.props.total}</span></h2>
    );
  }
});
