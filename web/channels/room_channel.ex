defmodule TicChatToe.RoomChannel do
  use Phoenix.Channel

  #API

  def found_match({socket_a, socket_b}) do
    room_id = UUID.uuid1()
    push socket_a, "new_room", %{ "room_id" => room_id }
    push socket_b, "new_room", %{ "room_id" => room_id }
  end

  def join("rooms:lobby", _auth_msg, socket) do
    {:ok, socket}
  end

  def join("rooms:find_match", _auth_msg, socket) do
    {:ok, socket}
  end

  def join("rooms:" <> _private_room, _auth_msg, socket) do
    {:ok, socket}
  end

  def handle_in("new_msg", msg, socket) do
    IO.inspect msg
    IO.inspect socket.id
    id = socket.id
    mod_msg = %{ msg | id: id }
    IO.inspect mod_msg
    broadcast! socket, "new_msg", msg
    #data = msg.payload
    #with_id = %Phoenix.Socket.Message{ msg | payload: %{ data | id: socket.id }}
    #IO.inspect with_id
    #broadcast! socket, "new_msg", with_id
    {:noreply, socket}
  end

  def handle_in("find_match", _params, socket) do
    TicChatToe.MatchMaker.find_match(socket)
    {:noreply, socket}
  end

  def handle_out("new_msg", payload, socket) do
    IO.inspect payload
    #cond do
    #  socket.id != payload.id ->
    #    push socket, "new_msg", payload
    #end
    push socket, "new_msg", payload
    {:noreply, socket}
  end

  ## WebRTC only
  #def handle_in("candidate", payload, socket) do
  #  broadcast! socket, "candidate", %{ payload | :id => socket.id }
  #  {:noreply, socket}
  #end

  #def handle_out("candidate", payload, socket) do

  #end

end
