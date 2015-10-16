import React, { Component, PropTypes } from 'react';

export default class GameChannel extends Component {
  componentDidMount() {
    console.log('Game Socket is mounting');
    const { WSocket, Video } = this.props;
    WSocket.game.on('candidate', (msg) => {
      this.props.addCandidate(msg.value)
    })

    WSocket.game.on('sdp', (msg) => {
      console.log('sdp message');
      if (! this.props.Video.startCall) {
        console.log('Creating answer');
        this.props.Video.peerConn.createAnswer(this.props.gotDescription)
      }
      this.props.addSDP(msg.value)
    })

    Video.peerConn.onicecandidate = function(evt) {
      WSocket.game.push('candidate', { value: evt.candidate });
    }
    Video.peerConn.onaddstream = function(evt) {
      this.props.strangerStream(evt.stream);
    }
    Video.peerConn.oniceconnectionstatechange = function () {
      if(peerConn.iceConnectionState == 'disconnected') {
        console.log('PEER DISCONNECTED, TODO: clean things up');
      }
    }
    console.log(this.props);
  }

  render() {
    return null;
  }
}
