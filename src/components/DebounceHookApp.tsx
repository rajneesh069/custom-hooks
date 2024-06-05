import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function Debounce() {
  const [input, setInput] = useState<string>("");
  const debouncedValue = useDebounce(input, 6000);

  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input
        placeholder="Search..."
        onChange={handleInputChange}
        value={input}
      />
    </div>
  );
}
