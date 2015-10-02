import React, { Component } from 'react';

export default class FindGame extends Component {
  render() {
    return (
      <div className='col-md-offset-1 col-md-7'>
        <div className='jumbotron' onClick={ this.props.findMatch }>
          <h1> Find Game </h1>
        </div>
      </div>
    )
  }
}
