import { useState } from "react";
import { useInterval } from "../hooks/useInterval";

export default function SetCountUsingUseAppIntervalHook() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 3000);

  return (
    <div style={{ margin: 2, border: "2px solid black" }}>
      <p> You count is {count}.</p>
    </div>
  );
}
