// import Todo from "./components/Todo";
// import { useTodos } from "./hooks/useTodos";

import Debounce from "./components/DebounceHookApp";
// import SetCountUsingUseAppIntervalHook from "./components/UseIntervalApp";

// import IsUserOnline from "./components/IsUserOnline";
// import MousePosition from "./components/MousePosition";

function App() {
  // const { todos, loading } = useTodos(5);

  return (
    <div
      style={{
        height: "100%",
        border: "1px solid gray",
      }}
    >
      {/* {loading ? "loading..." : todos.map((todo) => <Todo todo={todo} />)} */}
      {/* <IsUserOnline /> */}
      {/* <MousePosition /> */}
      {/* <SetCountUsingUseAppIntervalHook /> */}
      <Debounce />
    </div>
  );
}

export default App;
