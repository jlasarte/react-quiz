import React from 'react';

import { LogIn } from './LogIn';
import Header from './Header';

export default React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Header appName={this.props.appName} />
        <LogIn />
      </div>
    );
  }
});
