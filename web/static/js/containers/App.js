import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from '../components/Nav.js';
import Chat from '../components/Chat.js';
//import * from '../actions/matches.js';
import * as MatchActions from '../actions/matches.js';

class AppContents extends Component {
  componentDidMount() {
    console.log("App contents mounted");
    //console.log(this.props.WSocket);
    const {dispatch, WSocket, ticChat} = this.props;
    console.log(ticChat);
    //const actions = bindActionCreators(MatchActions, dispatch)
    //this.props.WSocket.socket.connect();
    //this.props.dispatch({ type: 'LOBBY_CONNECT' });
    console.log(this.props);
    WSocket.lobby.on('new_msg', msg => dispatch(MatchActions.lobbyMessage(msg)));
  }

  render() {
    const { dispatch } = this.props;
    let actionCreators = bindActionCreators(MatchActions, dispatch);

    return (
      <div>
        < NavBar/>
        <div>
          <div className='row'>
            <div className='col-md-offset-1 col-md-7'>
              <div className='jumbotron'>
                <h1>Hello world</h1>
              </div>
            </div>
            <div className='col-md-offset-1 col-md-3'>
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
