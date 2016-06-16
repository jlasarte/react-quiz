import React from 'react';
import Highlight from 'react-highlight';

import { LogIn } from './LogIn';
import Header from './Header';

export default React.createClass({
  render() {
    return (
      <div className='main'>
        <Header appName='React Quiz - Components Demo' />
        <ul>
          <li><a href='#header-component'>Header</a></li>
          <li><a href='#login'>LogIn</a></li>
        </ul>
        <div id='header-component' className='component-demo'>
          <h3>Header</h3>
          <Highlight className='javascript'>
            {"<Header appName='name' />"}
          </Highlight>
          <Header appName='React Quiz' />
        </div>
        <div id='login-component' className='component-demo'>
          <h3>LogIn</h3>
          <Highlight className='javascript'>
            {"<LogIn />"}
          </Highlight>
          <LogIn />
        </div>
      </div>
    );
  }
});
