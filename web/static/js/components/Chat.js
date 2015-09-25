import React, { Component } from 'react';
import ChatBox from './ChatBox.js';

export default class Chat extends Component {
  render() {
    console.log('IN CHAT', this.props);
    return (
        <div className='full-height'>
          <h3> Chat </h3>
          <ChatBox {...this.props}/>
        </div>
    );
  }
}
