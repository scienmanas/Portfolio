"use client";

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export function CursorLight(): JSX.Element {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-light"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
}
