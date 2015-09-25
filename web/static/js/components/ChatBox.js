import React, { Component } from 'react';
import ChatMessages from './ChatMessages.js';
import ChatInput from './ChatInput.js';

export default class ChatBox extends Component {
  render() {
    return (
        <div className='full-height'>
          <ChatMessages {...this.props} />
          <ChatInput {...this.props} />
        </div>
    );
  }
}
