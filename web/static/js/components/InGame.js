import React, { Component } from 'react';
import GameChannel from './GameChannel.js';

export default class InGame extends Component {
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
