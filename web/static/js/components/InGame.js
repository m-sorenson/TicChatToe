import React, { Component } from 'react';
import Adapter from 'webrtc-adapter';
import getUserMedia from 'getusermedia';

export default class InGame extends Component {
  componentDidMount() {
    const { WSocket, Video } = this.props;
    let addStream = this.props.addStream;
    let that = this;
    getUserMedia(function (err, success) {
      if(err) {
        console.log(err);
      } else {
        addStream(success);
        that.forceUpdate();
      }
    })

    let strangerStream = this.props.strangerStream
    let peerConn = Video.peerConn
    function start(isCaller, data) {
      peerConn.onicecandidate = function(evt) {
        WSocket.game.push('candidate', { candidate: evt.candidate });
      };
      if(Video.you.stream) {
        peerConn.addStream(Video.you.stream);
      }
      peerConn.onaddstream = function(evt) {
        strangerStream(evt.stream);
      }
      peerConn.oniceconnectionstatechange = function () {
        if(peerConn.iceConnectionState == 'disconnected') {
          console.log('PEER DISCONNECTED, TODO: clean things up');
        }
      }
      if(data.remoteDescription) {
        peerConn.setRemoteDescription(data.remoteDescription);
      }
      if(data.iceCandidate) {
        peerConn.addIceCandidate(data.iceCandidate);
      }
      if(isCaller) {
        peerConn.createOffer(gotDescription);
      } else {
        peerConn.createAnswer(gotDescription);
      }
      function gotDescription(desc) {
        peerConn.setLocalDescription(desc);
        WSocket.game.push('sdp', {stranger: that.state.stranger, content: desc});
      }
      // lets see if this is not needed
      //that.setState({peerConn: peerConn});
    };
  }

  render() {
    let yourStream = this.props.Video.you.videoSrc
    let strangerStream = this.props.Video.stranger.videoSrc
    return (
      <div className='col-md-offset-1 col-md-7'>
        <video className='col-md-6' autoPlay src={ yourStream } />
        <video className='col-md-6' autoPlay src={ strangerStream } />
      </div>
    )
  }
}
