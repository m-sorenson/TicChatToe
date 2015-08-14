defmodule TicChatToe.MatchMaker do
  use GenServer

  @server __MODULE__

  ## Client API
  def find_match(socket) do
    GenServer.cast(@server, {:find_match, socket})
  end

  def get_state() do
    GenServer.call(@server, :get_state)
  end

  def start_link() do
    GenServer.start_link(__MODULE__, [], [name: @server])
  end

  ## Callbacks
  def init(_args) do
    state = []
    {:ok, state}
  end

  def handle_cast({:find_match, socket}, []) do
    {:noreply, [socket]}
  end

  def handle_cast({:find_match, socket}, [waiting]) do
    TicChatToe.RoomChannel.found_match({socket, waiting})
    {:noreply, []}
  end

  def handle_cast(_cast, state) do
    {:noreply, state}
  end

  def handle_call(:get_state, {_from, _ref}, state) do
    {:reply, state, state}
  end

  def handle_call(_call, {_from, _ref}, state) do
    {:noreply, state}
  end
end
