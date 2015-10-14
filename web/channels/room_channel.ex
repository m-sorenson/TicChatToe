defmodule TicChatToe.RoomChannel do
  use Phoenix.Channel

  #API

  def found_match({socket_a, socket_b}) do
    room_id = UUID.uuid1()
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

  def handle_in("find_match", _params, socket) do
    TicChatToe.MatchMaker.find_match(socket)
    {:noreply, socket}
  end

  ## WebRTC only
  intercept ["candidate", "sdp"]

  def handle_in("candidate", payload, socket) do
    IO.puts "candidate event"
    broadcast! socket, "candidate", Map.merge(payload, %{ "filter" => socket.id })
    {:noreply, socket}
  end

  def handle_in("sdp", payload, socket) do
    IO.puts "sdp event"
    broadcast! socket, "sdp", Map.merge(payload, %{ "filter" => socket.id })
    {:noreply, socket}
  end

  def handle_out("candidate", %{ "filter" => filter, "value" => value }, socket) do
    cond do
      filter != socket.id ->
        push socket, "candidate", %{ "value" => value }
      true ->
        :ok
    end
    {:noreply, socket}
  end

  def handle_out("sdp", %{ "filter" => filter, "value" => value }, socket) do
    cond do
      filter != socket.id ->
        push socket, "sdp", %{ "value" => value }
      true ->
        :ok
    end
    {:noreply, socket}
  end

end
