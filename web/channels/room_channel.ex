defmodule TicChatToe.RoomChannel do
  use Phoenix.Channel

  def join("rooms:lobby", _auth_msg, socket) do
    {:ok, socket}
  end

  def join("rooms:find_match", _auth_msg, socket) do
    {:ok, socket}
  end

  def join("rooms:" <> _private_room, _auth_msg, socket) do
    {:ok, socket}
  end

end
