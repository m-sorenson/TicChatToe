import React, { Component } from 'react';


export default class ChatInput extends Component {
  handleMessage(evt) {
    if(evt.keyCode === 13) {
      this.props.sendMessage({ body: evt.target.value });
      evt.target.value = '';
    }
  }

  render() {
    console.log('Chat input');
    console.log(this.props);
    return (
        <div className='form-group'>
          <input className='form-control input-lg' type='text' onKeyUp={this.handleMessage.bind(this)} />
        </div>
    );
  }
}
