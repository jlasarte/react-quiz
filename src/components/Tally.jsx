import React from 'react';

export default React.createClass({
  displayName: 'Tally',

  propTypes: {
    total: React.PropTypes.number
  },

  render() {
    return (
      <h2><span className='label label-default'>Points: {this.props.total}</span></h2>
    );
  }
});
