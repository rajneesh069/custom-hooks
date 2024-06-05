import { useState, useRef } from "react";
import { useAutoRefresh } from "../hooks/useAutoRefresh";

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
  const [pollingDelay, setPollingDelay] = useState<number>(5);
  const { todos, loading, error } = useAutoRefresh(pollingDelay);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePollingDelay = () => {
    if (inputRef.current) {
      const newDelay = Number(inputRef.current.value);
      setPollingDelay(newDelay);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 5, margin: 5 }}
    >
      <div style={{ display: "flex", gap: 2 }}>
        <input type="number" placeholder="Delay in seconds" ref={inputRef} />
        <button onClick={handlePollingDelay}>Set Delay</button>
      </div>
      <div>
        {loading
          ? "loading..."
          : error
          ? "Error fetching todos"
          : todos.map((todo) => <ShowTodo key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
}
