import React, { Component, PropTypes } from 'react';
import getUserMedia from 'getusermedia';

export default class LobbyChannel extends Component {
  componentDidMount() {
    const { WSocket } = this.props;
    let addStream = this.props.addStream;
    let strangerStream = this.props.strangerStream;

    WSocket.lobby.on('new_msg', msg => this.props.lobbyMessage(msg));
    WSocket.lobby.on('new_room', msg => this.props.foundMatch(msg.room_id));
    WSocket.lobby.on('start_call', msg => {
      getUserMedia(function (err, success) {
        if(err) {
          console.log(err);
        } else {
          addStream(success);
          let call = WSocket.peer.call(msg.id, success);
          call.on('stream', (remoteStream) => {
            strangerStream(remoteStream);
          })
        }
      })
    });
    WSocket.peer.on('call', (call) => {
      getUserMedia(function (err, success) {
        if(err) {
          console.log(err);
        } else {
          addStream(success);
          call.answer(success);
          call.on('stream', (remoteStream) => {
            strangerStream(remoteStream);
          })
        }
      })
    })
  }

  render() {
    return null;
  }
}
