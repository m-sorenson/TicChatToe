import React, { Component, PropTypes } from 'react';

export default class GameChannel extends Component {
  componentDidMount() {
    console.log('Game Socket is mounting');
    const { WSocket, Video } = this.props;
    WSocket.game.on('candidate', (msg) => {
      console.log('Candidate through socket.');
      this.props.addCandidate(msg.value)
    })

    WSocket.game.on('sdp', (msg) => {
      console.log('sdp message');
      this.props.addSDP(msg.value)
      if (! this.props.Video.startCall) {
        console.log('Creating answer');
        this.props.Video.peerConn.createAnswer(this.props.gotDescription)
      }
    })

    Video.peerConn.onicecandidate = function(evt) {
      console.log('Candidate event.');
      WSocket.game.push('candidate', { value: evt.candidate });
    }
    Video.peerConn.onaddstream = function(evt) {
      console.log('add stream event.');
      this.props.strangerStream(evt.stream);
    }
    Video.peerConn.oniceconnectionstatechange = function () {
      console.log('connection changed');
      console.log(Video.peerConn.iceConnectionState);
      if(Video.peerConn.iceConnectionState == 'disconnected') {
        console.log('PEER DISCONNECTED, TODO: clean things up');
      }
    }
  }

  render() {
    return null;
  }
}
