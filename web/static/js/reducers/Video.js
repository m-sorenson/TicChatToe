import { ADD_STREAM, LOCAL_VIDEO, STANGER_VIDEO } from '../constants/ActionTypes.js';
let _ = require('lodash')

const initalState = {
  you: {
    stream: undefined,
    videoSrc: undefined
  },
  stranger: {
    stream: undefined,
    videoSrc: undefined
  }
};

export default function WSocket(state = initalState, action ) {
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
    default:
      return state;
  }
}
