import { ADD_STREAM, LOCAL_VIDEO, STRANGER_VIDEO } from '../constants/ActionTypes.js';
import { RTCPeerConnection } from 'webrtc-adapter';
let config = require('../IceServer.js');
let _ = require('lodash')

const initalState = {
  peerConn: new RTCPeerConnection(config),
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
      console.log(action);
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

    default:
      return state;
  }
}
