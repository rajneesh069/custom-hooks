import useMousePos from "../hooks/useMousePosition";

export default function MousePosition() {
  const { x, y } = useMousePos();
  return (
    <div style={{ border: "2px solid black", margin: 2 }}>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
}
