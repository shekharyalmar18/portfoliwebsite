import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.matches('a, button, [data-cursor="hover"]')) {
        setHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.matches('a, button, [data-cursor="hover"]')) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const follow = () => {
      setFollower((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(follow);
    };
    const frame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(frame);
  }, [position]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      >
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998] mix-blend-difference transition-all duration-300"
        style={{
          transform: `translate3d(${follower.x - 20}px, ${follower.y - 20}px, 0) scale(${hovered ? 1.8 : 1})`,
        }}
      >
        <div className="h-10 w-10 rounded-full border border-white/50" />
      </div>
    </>
  );
}