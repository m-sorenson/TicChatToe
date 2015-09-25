import React, { Component } from 'react';
import ChatMessages from './ChatMessages.js';
import ChatInput from './ChatInput.js';

export default class ChatBox extends Component {
  render() {
    console.log('Chat box ');
    console.log(this.props);
    return (
        <div>
          <ChatMessages {...this.props} />
          <ChatInput {...this.props} />
        </div>
    );
  }
}
