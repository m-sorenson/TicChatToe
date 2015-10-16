import React, { Component, PropTypes } from 'react';

export default class GameChannel extends Component {
  componentDidMount() {
    console.log('Game Socket is mounting');
    const { WSocket, Video } = this.props;
    WSocket.game.on('candidate', (msg) => {
      // TODO: add candidate to peerConn
      //console.log('candidate event');
      //let candidate = new RTCIceCandidate(msg.value)
    })

    WSocket.game.on('sdp', (msg) => {
      // TODO: add description to peerConn
      //console.log('sdp event' + JSON.stringify(msg));
      //let desc = new RTCSessionDescription(msg.value)
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
  }

  render() {
    return null;
  }
}
