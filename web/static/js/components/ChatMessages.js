import React, { Component } from 'react';

export default class ChatMessages extends Component {
  render() {
    let messages = this.props.ticChat.lobby.map( (msg) => {
      return (
          <h4> { msg.body } </h4>
          );
    });
    return (
        <div>
          { messages }
        </div>
    );
  }
}
