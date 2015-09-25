import React, { Component } from 'react';


export default class ChatInput extends Component {
  handleMessage(evt) {
    if(evt.keyCode === 13) {
      this.props.sendMessage(evt.target.value);
      evt.target.value = '';
    }
  }

  render() {
    return (
        <div className='form-group chat-input'>
          <input className='form-control input-lg' type='text' onKeyUp={this.handleMessage.bind(this)} />
        </div>
    );
  }
}
