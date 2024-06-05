import { useTodos } from "../hooks/useTodos";

export interface todo {
  id: number;
  title: string;
  description: string;
}

function ShowTodo({ todo }: { todo: todo }) {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 3,
      }}
    >
      <p style={{ color: "black" }}>id: {todo.id}</p>
      <p style={{ color: "orangered" }}>title: {todo.title}</p>
      <p style={{ color: "orangered" }}>description :{todo.description}</p>
    </div>
  );
}

export default function Todo() {
  const { todos, loading, error } = useTodos(5);

  return (
    <div>
      {error
        ? "Error fetching data"
        : todos.map((todo) => <ShowTodo todo={todo} />)}
      {loading ? "loading..." : todos.map((todo) => <ShowTodo todo={todo} />)}
    </div>
  );
}
