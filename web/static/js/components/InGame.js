import React, { Component } from 'react';
import { RTCPeerConnection, RTCIceCandidate, RTCSessionDescription } from 'webrtc-adapter';
import getUserMedia from 'getusermedia';
import GameChannel from './GameChannel.js';
//let config = require('../IceServer.js');

export default class InGame extends Component {
  //componentDidMount() {
  //  const { WSocket, Video } = this.props;
  //  console.log("InGame Video");
  //  console.log(Video);
  //  let addStream = this.props.addStream;
  //  let that = this;
  //  getUserMedia(function (err, success) {
  //    if(err) {
  //      console.log(err);
  //    } else {
  //      addStream(success);
  //      that.forceUpdate();
  //    }
  //  })

  //  let strangerStream = this.props.strangerStream
  //  let addPeer = this.props.addPeer
  //  //let peerConn = Video.peerConn
  //  function start(isCaller, data) {
  //    console.log("start was called.");
  //    let peerConn = new RTCPeerConnection(config);
  //    peerConn.onicecandidate = function(evt) {
  //      WSocket.game.push('candidate', { value: evt.candidate });
  //    }
  //    if(Video.you.stream) {
  //      peerConn.addStream(Video.you.stream);
  //    }
  //    peerConn.onaddstream = function(evt) {
  //      strangerStream(evt.stream);
  //    }
  //    peerConn.oniceconnectionstatechange = function () {
  //      if(peerConn.iceConnectionState == 'disconnected') {
  //        console.log('PEER DISCONNECTED, TODO: clean things up');
  //      }
  //    }
  //    if(data.remoteDescription) {
  //      peerConn.setRemoteDescription(data.remoteDescription);
  //    }
  //    if(data.iceCandidate) {
  //      peerConn.addIceCandidate(data.iceCandidate);
  //    }
  //    if(isCaller) {
  //      peerConn.createOffer(gotDescription);
  //    } else {
  //      peerConn.createAnswer(gotDescription);
  //    }
  //    function gotDescription(desc) {
  //      peerConn.setLocalDescription(desc);
  //      WSocket.game.push('sdp', { value: desc });
  //    }
  //    addPeer(peerConn)
  //  };

  //  WSocket.game.on('candidate', (msg) => {
  //    console.log('candidate event');
  //    let candidate = new RTCIceCandidate(msg.value)
  //    if(!Video.peerConn) {
  //      start(false, { iceCandidate: candidate })
  //    } else {
  //      Video.peerConn.addIceCandidate(candidate)
  //    }
  //  })

  //  WSocket.game.on('sdp', (msg) => {
  //    console.log('sdp event' + JSON.stringify(msg));
  //    let desc = new RTCSessionDescription(msg.value)
  //    if(!Video.peerConn) {
  //      start(false, { remoteDescription: desc })
  //    } else {
  //      Video.peerConn.setRemoteDescription(desc)
  //    }
  //  })
  //}

  //componentWillReceiveProps(nextProps) {
  //  const { WSocket, Video } = nextProps;
  //  let strangerStream = nextProps.strangerStream
  //  let addPeer = nextProps.addPeer
  //  //let peerConn = Video.peerConn
  //  function start(isCaller, data) {
  //    console.log("start was called.");
  //    let peerConn = new RTCPeerConnection(config);
  //    peerConn.onicecandidate = function(evt) {
  //      WSocket.game.push('candidate', { value: evt.candidate });
  //    };
  //    if(Video.you.stream) {
  //      peerConn.addStream(Video.you.stream);
  //    }
  //    peerConn.onaddstream = function(evt) {
  //      strangerStream(evt.stream);
  //    }
  //    peerConn.oniceconnectionstatechange = function () {
  //      if(peerConn.iceConnectionState == 'disconnected') {
  //        console.log('PEER DISCONNECTED, TODO: clean things up');
  //      }
  //    }
  //    if(data.remoteDescription) {
  //      peerConn.setRemoteDescription(data.remoteDescription);
  //    }
  //    if(data.iceCandidate) {
  //      peerConn.addIceCandidate(data.iceCandidate);
  //    }
  //    if(isCaller) {
  //      peerConn.createOffer(gotDescription);
  //    } else {
  //      peerConn.createAnswer(gotDescription);
  //    }
  //    function gotDescription(desc) {
  //      peerConn.setLocalDescription(desc);
  //      WSocket.game.push('sdp', { value: desc });
  //    }
  //    addPeer(peerConn)
  //  };

  //  WSocket.game.on('candidate', (msg) => {
  //    console.log('candidate event');
  //    let candidate = new RTCIceCandidate(msg.value)
  //    if(!Video.peerConn) {
  //      start(false, { iceCandidate: candidate })
  //    } else {
  //      Video.peerConn.addIceCandidate(candidate)
  //    }
  //  })

  //  WSocket.game.on('sdp', (msg) => {
  //    console.log('sdp event' + JSON.stringify(msg));
  //    let desc = new RTCSessionDescription(msg.value)
  //    if(!Video.peerConn) {
  //      start(false, { remoteDescription: desc })
  //    } else {
  //      Video.peerConn.setRemoteDescription(desc)
  //    }
  //  })

  //  if(Video.startCall) {
  //    console.log("Start call was called");
  //    start(true, {})
  //    nextProps.startCall(false)
  //  }
  //}

  render() {
    let yourStream = this.props.Video.you.videoSrc
    let strangerStream = this.props.Video.stranger.videoSrc
    return (
      <div className='col-md-offset-1 col-md-7'>
        <video className='col-md-6' autoPlay src={ yourStream } />
        <video className='col-md-6' autoPlay src={ strangerStream } />
        < GameChannel {...this.props} />
      </div>
    )
  }
}
