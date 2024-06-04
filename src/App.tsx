// import Todo from "./components/Todo";
// import { useTodos } from "./hooks/useTodos";

import IsUserOnline from "./components/IsUserOnline";
import MousePosition from "./components/MousePosition";

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
      <IsUserOnline />
      <MousePosition />
    </div>
  );
}

export default App;
