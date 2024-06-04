import Todo from "./components/Todo";
import { useTodos } from "./utils/customHooks";

function App() {
  const { todos, loading } = useTodos(5);

  return (
    <div
      style={{
        height: "100%",
        border: "1px solid gray",
      }}
    >
      {loading ? "loading..." : todos.map((todo) => <Todo todo={todo} />)}
    </div>
  );
}

export default App;
