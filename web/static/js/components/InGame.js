import React, { Component } from 'react';
import Adapter from 'webrtc-adapter';
import getUserMedia from 'getusermedia';

export default class InGame extends Component {
  componentDidMount() {
    console.log("Did mount");
    console.log(this.props);
    let addStream = this.props.addStream;
    getUserMedia(function (err, success) {
      if(err) {
        console.log(err);
      } else {
        addStream(success);
      }
    })
  }

  render() {
    console.log("IN Game");
    console.log(this.props);
    let yourStream = this.props.Video.you.videoSrc
    console.log(yourStream);
    return (
      <div className='col-md-offset-1 col-md-7'>
        <video className='col-md-6' autoPlay src={ yourStream } />
        <video className='col-md-6' />
      </div>
    )
  }
}
