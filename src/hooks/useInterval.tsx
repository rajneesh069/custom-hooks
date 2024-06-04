import { useEffect } from "react";

export function useInterval(callback: () => unknown, ms: number | 0) {
  useEffect(() => {
    const val = setInterval(() => {
      callback();
    }, ms);

    return () => {
      clearInterval(val);
    };
  }, [callback, ms]);
}
