import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from '../components/Nav.js';
import Chat from '../components/Chat.js';
import FindGame from '../components/FindGame.js';
import InGame from '../components/InGame.js';
import LobbyChannel from '../components/LobbyChannel.js';
import * as MatchActions from '../actions/matches.js';

class AppContents extends Component {

  render() {
    const { dispatch } = this.props;
    let actionCreators = bindActionCreators(MatchActions, dispatch);
    let nullViews = [];
    nullViews.push(< LobbyChannel {...this.props } {...actionCreators} />)

    let MainActivity = this.props.WSocket.game ?
      < InGame {...this.props} {...actionCreators} /> :
      < FindGame {...actionCreators} />;

    return (
      <div className='full-height'>
        < NavBar/>
        <div className='fill-height'>
          <div className='row full-height'>

            { MainActivity }

            <div className='col-md-offset-1 col-md-3 full-height'>
              <Chat {...this.props } {...actionCreators} />
            </div>
          </div>
        </div>
        { nullViews }
      </div>
    );
  }
}

function select(state) {
  return state
}

export default connect(select)(AppContents)
