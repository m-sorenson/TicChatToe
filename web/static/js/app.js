//import {Socket} from "phoenix"

// let socket = new Socket("/ws")
// socket.connect()
// let chan = socket.chan("topic:subtopic", {})
// chan.join().receive("ok", resp => {
//   console.log("Joined succesffuly!", resp)
// })

//let lobbyInit = () => {
//  let chatInput = $('#chat-input');
//  let messages = $('#messages');
//
//  let socket = new Socket("/socket");
//  socket.connect();
//  let chan = socket.chan("rooms:find_match", {});
//
//  chan.on('new_msg', payload => {
//    messages.append( $("<div>").html(payload.body));
//  });
//
//  chan.on('new_room', payload => {
//    let room = payload.room_id;
//    chan = socket.chan('rooms:' + room, {});
//    chan.join().receive("ok", resp => {
//      console.log("Joined room %s", room);
//    });
//    chan.on('new_msg', payload => {
//      messages.append( $("<div>").html(payload.body));
//    });
//    chatInput.on("keypress", event => {
//      if(event.keyCode === 13) {
//        chan.push("new_msg", { body: chatInput.val()});
//        chatInput.val("");
//      }
//    });
//  });
//
//  chatInput.on("keypress", event => {
//    if(event.keyCode === 13) {
//      chan.push("new_msg", { body: chatInput.val()});
//      chatInput.val("");
//    }
//  });
//
//  chan.join().receive("ok", resp => {
//    console.log("Joined succesffuly!", resp)
//    chan.push("find_match", {});
//  });
//};
//
//
//let App = {
//  lobby: lobbyInit
//}
//
//export default App

import React from 'react';
import Root from './containers/Root.js';

React.render(
    <Root/>,
    document.getElementById('appContainer')
);
console.log('we made it');
