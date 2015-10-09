import { combineReducers } from 'redux';
import ticChat from './TicChatToe.js';
import WSocket from './WSocket.js';
import Video from './Video.js';

const rootReducer = combineReducers({
  WSocket,
  ticChat,
  Video
});

export default rootReducer;
