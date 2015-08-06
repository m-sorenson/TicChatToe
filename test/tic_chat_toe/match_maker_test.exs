defmodule TicChatToe.MatchMakerTest do
  use ExUnit.Case, async: true

  setup do
    {:ok, _} = TicChatToe.MatchMaker.start_link();
    :ok
  end

  test "MatchMaker state changes" do
    socket = %Phoenix.Socket{}
    TicChatToe.MatchMaker.find_match(socket)
    assert [socket] == TicChatToe.MatchMaker.get_state()
    other_socket = %Phoenix.Socket{}
    TicChatToe.MatchMaker.find_match(other_socket)
    assert [] == TicChatToe.MatchMaker.get_state()
  end

end
