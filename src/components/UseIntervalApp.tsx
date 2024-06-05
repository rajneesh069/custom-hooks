import { ChangeEvent, useState } from "react";
import { useInterval } from "../hooks/useInterval";

export default function SetCountUsingUseAppIntervalHook(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<number>(0);
  const [delay, setDelay] = useState<number>(100);
  useInterval(() => {
    setCount((c) => c + 1);
  }, delay);

  return (
    <div style={{ margin: 2, border: "2px solid black" }}>
      <div style={{ display: "flex", gap: 3, margin: 2 }}>
        <input
          placeholder="Delay in MS"
          type="number"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setInput(Number(event.target.value));
          }}
        />
        <button
          onClick={() => {
            setDelay(input);
          }}
        >
          Set Delay
        </button>
      </div>
      <p> Your count is {count}.</p>
    </div>
  );
}
