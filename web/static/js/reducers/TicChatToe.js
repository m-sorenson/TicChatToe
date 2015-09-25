import { LOBBY_MESSAGE, FOUND_MATCH } from '../constants/ActionTypes.js';
import { Socket } from '../phoenix';

const initalState = {
  lobby: [],
  priv: []
};

export default function ticChat(state = initalState, action ) {
  switch(action.type) {
    case LOBBY_MESSAGE:
      return {...state, lobby: state.lobby.concat([action.msg])};
    default:
      return state;
  }
}
