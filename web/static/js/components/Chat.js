import React, { Component } from 'react';
import ChatBox from './ChatBox.js';

export default class Chat extends Component {
  render() {
    return (
        <div>
          <h3> Chat </h3>
          <ChatBox/>
        </div>
    );
  }
}
