import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from '../components/Nav.js';
import Chat from '../components/Chat.js';
//import * from '../actions/matches.js';
import * as MatchActions from '../actions/matches.js';

class AppContents extends Component {
  componentDidMount() {
    const {dispatch, WSocket, ticChat} = this.props;
    WSocket.lobby.on('new_msg', msg => dispatch(MatchActions.lobbyMessage(msg)));
    WSocket.lobby.on('new_room', msg => dispatch(MatchActions.foundMatch(msg.room_id)));
  }

  render() {
    const { dispatch } = this.props;
    let actionCreators = bindActionCreators(MatchActions, dispatch);

    let text = this.props.WSocket.game ? 'In Game' : 'Find Game';

    return (
      <div className='full-height'>
        < NavBar/>
        <div className='full-height'>
          <div className='row full-height'>
            <div className='col-md-offset-1 col-md-7'>
              <div className='jumbotron' onClick={ actionCreators.findMatch }>
                <h1> { text } </h1>
              </div>
            </div>
            <div className='col-md-offset-1 col-md-3 full-height'>
              <Chat {...this.props } {...actionCreators} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function select(state) {
  return state
}

export default connect(select)(AppContents)
