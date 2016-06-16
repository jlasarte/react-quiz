import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className='header navbar navbar-default'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='#'> <h1 className='navbar-brand-name'>{this.props.appName}</h1></a>
        </div>
      </div>
    );
  }
});
