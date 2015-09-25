import { combineReducers } from 'redux';
import ticChat from './TicChatToe.js';
import WSocket from './WSocket.js';

const rootReducer = combineReducers({
  WSocket,
  ticChat
});

export default rootReducer;
