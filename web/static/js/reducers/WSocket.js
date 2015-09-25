import { LOBBY_CONNECT, SEND_MESSAGE } from '../constants/ActionTypes.js';
import { Socket } from '../phoenix';

let initalSocket = new Socket('/socket');
initalSocket.connect();
let lobbyChan = initalSocket.channel("rooms:lobby", {});
lobbyChan.join().receive('ok', resp => {
  console.log('Joined succesfuly! ', JSON.stringify(resp));
  lobbyChan.push('new_msg', { body: 'hello world'});
});

const initalState = {
  socket: initalSocket,
  lobby: lobbyChan
};

export default function WSocket(state = initalState, action ) {
  switch(action.type) {
    case SEND_MESSAGE:
      state.lobby.push('new_msg', action.msg);
      return state;
    default:
      return state;
  }
}
