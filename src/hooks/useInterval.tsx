import { useEffect } from "react";

export function useInterval(callback: () => unknown, ms: number = 200): void {
  useEffect(() => {
    const val = setInterval(() => {
      callback();
    }, ms);

    return () => {
      clearInterval(val);
    };
  }, [callback, ms]);
}
