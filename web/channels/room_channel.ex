defmodule TicChatToe.RoomChannel do
  use Phoenix.Channel

  def join("rooms:lobby", _auth_msg, socket) do
    IO.inspect socket
    {:ok, socket}
  end

  def join("rooms:find_match", _auth_msg, socket) do
    {:ok, socket}
  end

  def join("rooms:" <> _private_room, _auth_msg, socket) do
    {:ok, socket}
  end

  def handle_in("new_msg", %{"body" => body}, socket) do
    broadcast! socket, "new_msg", %{body: body}
    {:noreply, socket}
  end

  def handle_out("new_msg", payload, socket) do
    push socket, "new_msg", payload
    {:noreply, socket}
  end

end
