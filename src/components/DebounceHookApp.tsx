import { ChangeEvent, useState } from "react";
// import { useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function Debounce() {
  const [input, setInput] = useState<string>("");
  const [delay, setDelay] = useState<number | string>("");
  const [delayInHook, setDelayInHook] = useState<number>(0);
  const debouncedValue = useDebounce(input, delayInHook);

  // can do an API call here
  // useEffect(() => {
  //   console.log(debouncedValue);
  // }, [debouncedValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleDelayChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDelay(Number(e.target.value));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 4, margin: 5 }}
    >
      <div style={{ display: "flex", gap: 2 }}>
        <input
          type="number"
          placeholder="Delay in MS"
          value={delay}
          onChange={handleDelayChange}
        />
        <button
          onClick={() => {
            setDelayInHook(delay as number);
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
