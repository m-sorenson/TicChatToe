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

  }

  render() {
    return null;
  }
}
