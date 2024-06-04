import { useEffect, useState } from "react";

export function useIsOnline(): boolean {
  const [isOnline, setIsOnline] = useState<boolean>(window.navigator.onLine);
  useEffect(() => {
    // const val = setInterval(() => {
    //   if (window.navigator.onLine) {
    //     setIsOnline(true);
    //   } else {
    //     setIsOnline(false);
    //   }
    // }, 5000);

    // if (window.navigator.onLine) {
    //   setIsOnline(true);
    // } else {
    //   setIsOnline(false);
    // }

    // return () => {
    //   clearInterval(val);
    // };

    //Other way

    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    return () => {
      window.removeEventListener("online", () => {
        setIsOnline(true);
      });
      window.removeEventListener("offline", () => {
        setIsOnline(false);
      });
    };
  }, []);
  return isOnline;
}
