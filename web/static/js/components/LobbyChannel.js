import React, { Component, PropTypes } from 'react';

export default class LobbyChannel extends Component {
  componentDidMount() {
    console.log('Lobby Socket is mounting');
    const { WSocket } = this.props;
    WSocket.lobby.on('new_msg', msg => this.props.lobbyMessage(msg));
    WSocket.lobby.on('new_room', msg => this.props.foundMatch(msg.room_id));
    WSocket.lobby.on('start_call', msg => {
      console.log("recieved start call message");
      let that = this
      setTimeout(function() {
        that.props.Video.peerConn.createOffer(that.props.gotDescription)
      }, 1000);
    });
  }

  render() {
    return null;
  }
}
