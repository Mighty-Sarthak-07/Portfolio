import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Cursor Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-60 dark:opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.07), transparent 80%)`,
        }}
      />

      {/* Subtle Studio Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-[150px] w-[500px] h-[500px] bg-sky-500/5 dark:bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />
    </div>
  );
};

