import { ADD_PEER, ADD_STREAM, LOCAL_VIDEO, STRANGER_VIDEO, START_CALL } from '../constants/ActionTypes.js';
import { RTCPeerConnection } from 'webrtc-adapter';
let config = require('../IceServer.js');
let _ = require('lodash')

const initalState = {
  startCall: false,
  //peerConn: new RTCPeerConnection(config),
  peerConn: undefined,
  you: {
    stream: undefined,
    videoSrc: undefined
  },
  stranger: {
    stream: undefined,
    videoSrc: undefined
  }
};

export default function Video(state = initalState, action ) {
  switch(action.type) {
    case ADD_STREAM:
      return _.assign(state,
          { you:
            {
              stream: action.stream,
              videoSrc: window.URL.createObjectURL(action.stream)
            }
          })
    case STRANGER_VIDEO:
      return _.assign(state,
          { stranger:
            {
              stream: action.stream,
              videoSrc: window.URL.createObjectURL(action.stream)
            }
          })
    case START_CALL:
      let next_state = { ...state, startCall: action.value }
      console.log('Setting startCall value to ', next_state);
      return next_state
    case ADD_PEER:
      return {...state, peerConn: action.peer }
    default:
      return state;
  }
}
