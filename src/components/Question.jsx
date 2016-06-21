import React from 'react';

export default React.createClass({
  render: function() {
    return (
        <div className='question panel panel-default'>
            <div className='panel-body'>
                {this.props.text}
            </div>
        </div>
    );
  }
});
