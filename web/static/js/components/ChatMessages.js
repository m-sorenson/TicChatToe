import React, { Component } from 'react';

export default class ChatMessages extends Component {
  render() {
    let messages = this.props.ticChat.lobby.map( (msg) => {
      let from = msg.id === this.props.WSocket.id ? ' You' : ' Stranger';
      return (
          <div>
            <h4> From: { from } </h4>
            <h4> { msg.payload } </h4>
          </div>
          );
    });
    return (
        <div className='partial-height'>
          { messages }
        </div>
    );
  }
}
