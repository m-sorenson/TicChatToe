import { FOUND_MATCH, ADD_STREAM, LOCAL_VIDEO, STRANGER_VIDEO } from '../constants/ActionTypes.js';
let _ = require('lodash')

const initalState = {
  startCall: false,
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
      return {...state,
           you:
            {
              stream: action.stream,
              videoSrc: window.URL.createObjectURL(action.stream)
            }
          }
    case STRANGER_VIDEO:
      return {...state,
           stranger:
            {
              stream: action.stream,
              videoSrc: window.URL.createObjectURL(action.stream)
            }
          }
    default:
      return state;
  }
}
