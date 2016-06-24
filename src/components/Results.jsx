import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Button from './Button';
import * as actionCreators from '../action_creators';
import { entries } from '../entries';

export const Results = React.createClass({
  displayName: 'Results',

  propTypes: {
    tally: React.PropTypes.number,
    userName: React.PropTypes.string,
    history: React.PropTypes.object
  },
  handleButtonClick(){
    const user = this.props.userName;
    this.props.setEntries(entries);
    this.props.startGame(user);
    this.props.history.push('/game');
  },

  render: function() {
    return (
      <div className='main container-fluid'>
        <Header appName='React Quiz' />
        Results

        <Button text='Play Again!' onHandleButtonClick={this.handleButtonClick} />
      </div>
    );
  }
});

const mapStateToProps = state => {
  return {
    tally: state.getIn(['game', 'tally']),
    userName: state.getIn(['game', 'user'])
  };
};

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
