import {Socket} from "phoenix"

// let socket = new Socket("/ws")
// socket.connect()
// let chan = socket.chan("topic:subtopic", {})
// chan.join().receive("ok", resp => {
//   console.log("Joined succesffuly!", resp)
// })

let lobbyInit = () => {
  let chatInput = $('#chat-input');
  let messages = $('#messages');

  let socket = new Socket("/socket");
  socket.connect();
  let chan = socket.chan("rooms:lobby", {});

  chan.on('new_msg', payload => {
    messages.append( $("<div>").html(payload.body));
  });

  chatInput.on("keypress", event => {
    if(event.keyCode === 13) {
      chan.push("new_msg", { body: chatInput.val()});
      chatInput.val("");
    }
  });

  chan.join().receive("ok", resp => {
    console.log("Joined succesffuly!", resp)
  });
};


let App = {
  lobby: lobbyInit
}

export default App
