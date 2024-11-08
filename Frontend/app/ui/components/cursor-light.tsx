"use client";

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export function CursorLight(): JSX.Element {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isSmallScreen, setIsSmallScreen] = useState<null | boolean>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="cursor-light z-50 pointer-events-none absolute"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        display: isSmallScreen ? "none" : "flex",
      }}
    />
  );
}
