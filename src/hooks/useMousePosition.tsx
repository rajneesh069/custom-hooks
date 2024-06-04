import { useEffect, useState } from "react";

interface MousePos {
  x: number;
  y: number;
}

export default function useMousePos(): MousePos {
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
  function handleMouseMove(e: MouseEvent) {
    setMousePos({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", (e: MouseEvent) => {
      handleMouseMove(e);
    });
  }, []);
  return mousePos;
}
