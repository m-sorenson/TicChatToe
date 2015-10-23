import { FOUND_MATCH, ADD_PEER, ADD_STREAM, LOCAL_VIDEO, STRANGER_VIDEO } from '../constants/ActionTypes.js';
import { RTCPeerConnection } from 'webrtc-adapter';
let config = require('../IceServer.js');
let _ = require('lodash')

const initalState = {
  startCall: false,
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

let peer

export default function Video(state = initalState, action ) {
  switch(action.type) {
    case ADD_STREAM:
      console.log('adding stream');
      state.peerConn.addStream(action.stream)
        console.log(state.peerConn);
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
    case FOUND_MATCH:
      let peer = new RTCPeerConnection(config)
      return {...state, peerConn: peer}
    default:
      return state;
  }
}
