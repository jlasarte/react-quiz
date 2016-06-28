import React from 'react';

export default React.createClass({
  propTypes: {
    appName: React.PropTypes.string,
  },

  render: function() {
    return (
      <div className='header navbar navbar-default'>
        <div className='navbar-header'>
          <h1 className='navbar-brand-name'>{this.props.appName}</h1>
        </div>
      </div>
    );
  }
});
