import React from 'react';

export default React.createClass({
  render: function() {
    return
      <div className="header">
        <h1> {this.prop.appName} </h1>
      </div>
  }
});
