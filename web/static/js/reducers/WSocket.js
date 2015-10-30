import { SEND_MESSAGE, FIND_MATCH, FOUND_MATCH } from '../constants/ActionTypes.js';
import { Socket } from '../phoenix';
import Uuid from 'uuid';
let Peer = require('peerjs');

let id = Uuid.v4();
let initalSocket = new Socket('/socket');
initalSocket.connect();
let lobbyChan = initalSocket.channel("rooms:lobby", {});
lobbyChan.join();

const initalState = {
  socket: initalSocket,
  lobby: lobbyChan,
  id: id,
  peer: new Peer(id, { host: 'stark-reef-2811.herokuapp.com', port: 80 }),
  looking: false
};

export default function WSocket(state = initalState, action ) {
  switch(action.type) {
    case SEND_MESSAGE:
      state.lobby.push('new_msg', { id: state.id, payload: action.msg });
      return state;
    case FIND_MATCH:
      if(!state.looking) {
        state.lobby.push('find_match', { id: state.id });
      }
      return {...state, looking: true}
    case FOUND_MATCH:
      console.log(action);
      let game_room = state.socket.channel("rooms:" + action.id, {});
      game_room.join();
      return {...state, game: game_room}
    default:
      return state;
  }
}
