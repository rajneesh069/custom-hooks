import { ChangeEvent, useRef, useState } from "react";
// import { useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function Debounce() {
  const [input, setInput] = useState<string>("");
  const delay = useRef<HTMLInputElement>(null);
  const [delayInHook, setDelayInHook] = useState<number>(0);
  const debouncedValue = useDebounce(input, delayInHook);

  // can do an API call here
  // useEffect(() => {
  //   console.log(debouncedValue);
  // }, [debouncedValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 4, margin: 5 }}
    >
      <div style={{ display: "flex", gap: 2 }}>
        <input type="number" placeholder="Delay in MS" ref={delay} />
        <button
          onClick={() => {
            setDelayInHook(Number(delay.current?.value));
          }}
        >
          Set Delay
        </button>
      </div>
      <div>
        <input
          placeholder="Search..."
          onChange={handleInputChange}
          value={input}
        />
      </div>
      <div style={{ display: "flex" }}>
        <p>Debounced Value(delayed after a given time) : &nbsp;</p>
        <p style={{ border: "2px solid black", minWidth: "100px" }}>
          {debouncedValue as string}
        </p>
      </div>
    </div>
  );
}
