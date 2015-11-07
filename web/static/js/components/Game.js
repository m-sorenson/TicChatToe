import React, { Component } from 'react';

export default class Game extends Component {
  compenentDidMount() {
  }

  render() {
    return(
      <div className='row'>
        <canvas id='myCanvas' className='col-md-12' ></canvas>
      </div>
    )
  }
}
