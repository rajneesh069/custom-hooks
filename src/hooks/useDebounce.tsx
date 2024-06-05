import { useEffect, useState } from "react";

export function useDebounce(param: unknown, delayInMS: number) {
  const [val, setVal] = useState<unknown>("");
  useEffect(() => {
    const value = setTimeout(() => {
      setVal(param);
    }, delayInMS);

    return () => {
      clearTimeout(value);
    };
  }, [param, delayInMS]);

  return val;
}
