import { useCallback, useEffect, useState } from "react";

export const usePointer = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onCatchMouseEvent = useCallback((e: MouseEvent) => {
    setX(e.clientX);
    setY(e.clientY);
  }, []);

  useEffect(() => {
    document.addEventListener("click", onCatchMouseEvent);
    return () => {
      document.removeEventListener("click", onCatchMouseEvent);
    };
  });

  return {
    poninter: { x, y },
  };
};
