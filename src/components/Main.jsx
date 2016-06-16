import React from 'react';

import { LogIn } from './LogIn';
import Header from './Header';

export default React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Header appName='React Quiz' />
        <LogIn />
        <div className='footer navbar navbar-default navbar-fixed-bottom'>
          <a href='#/demo'>Components Demo</a>
        </div>
      </div>
    );
  }
});
