import * as types from '../constants/ActionTypes.js';

export function foundMatch(id) {
  return { type: types.FOUND_MATCH, id };
}

export function lobbyMessage(msg) {
  return { type: types.LOBBY_MESSAGE, msg };
}

export function sendMessage(msg) {
  return { type: types.SEND_MESSAGE, msg };
}

export function findMatch() {
  return { type: types.FIND_MATCH };
}

export function addStream(stream) {
  return { type: types.ADD_STREAM, stream };
}

export function strangerStream(stream) {
  return { type: types.STRANGER_VIDEO, stream };
}

//export function startCall(desc) {
//  return { type: types.START_CALL, desc };
//}
//
//export function answerCall(desc) {
//  return { type: types.ANSWER_CALL, desc };
//}

export function addPeer(peer) {
  return { type: types.ADD_PEER, peer };
}

export function addCandidate(candidate) {
  return { type: types.ADD_CANDIDATE, candidate };
}

export function addSDP(sdp) {
  return { type: types.ADD_SDP, sdp };
}

export function gotDescription(desc) {
  console.log('We got a description');
  return { type: types.GOT_DESC, desc };
}
