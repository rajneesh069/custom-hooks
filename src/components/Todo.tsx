export interface todo {
  id: number;
  title: string;
  description: string;
}

export default function Todo({ todo }: { todo: todo }) {
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
