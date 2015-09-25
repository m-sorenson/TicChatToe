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
    broadcast! socket, "new_msg", msg
    {:noreply, socket}
  end

  def handle_in("find_match", _params, socket) do
    TicChatToe.MatchMaker.find_match(socket)
    {:noreply, socket}
  end

  def handle_out("new_msg", payload, socket) do
    push socket, "new_msg", payload
    {:noreply, socket}
  end

end
