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

export function startCall(value) {
  return { type: types.START_CALL, value };
}

export function addPeer(peer) {
  return { type: types.ADD_PEER, peer };
}

