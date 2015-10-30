defmodule TicChatToe.RoomChannel do
  use Phoenix.Channel

  #API

  def found_match({socket_a, socket_b}) do
    room_id = UUID.uuid1()
    IO.inspect socket_a
    push socket_a, "new_room", %{ "room_id" => room_id }
    push socket_a, "start_call", %{ }
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
    broadcast! socket, "new_msg", msg
    {:noreply, socket}
  end

  def handle_in("find_match", %{ id: id } , socket) do
    socket = assign(socket, :id, id)
    IO.inspect socket
    TicChatToe.MatchMaker.find_match(socket)
    {:noreply, socket}
  end

end
