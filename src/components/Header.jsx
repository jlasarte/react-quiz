import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className='header navbar navbar-default'>
        <div class="navbar-header">
          <a class="navbar-brand" href="#"><h1> {this.props.appName} </h1></a>
        </div>
      </div>
    );
  }
});
