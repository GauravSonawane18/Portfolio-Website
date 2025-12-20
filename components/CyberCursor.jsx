"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CyberCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Raw mouse position (instant)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing ring
  const springX = useSpring(mouseX, {
    stiffness: 800,
    damping: 40,
    mass: 0.3,
  });
  const springY = useSpring(mouseY, {
    stiffness: 800,
    damping: 40,
    mass: 0.3,
  });

  // Detect desktop pointer
  useEffect(() => {
    const check = () =>
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mouse tracking (NO OFFSET ❗)
  useEffect(() => {
    if (!isDesktop) return;

    let rafId;

    const move = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, [isDesktop, mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* INNER DOT — exact position */}
      <motion.div
        className="fixed z-[9999] pointer-events-none
                   w-2 h-2 rounded-full bg-accent"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* OUTER RING — smooth trail */}
      <motion.div
        className="fixed z-[9999] pointer-events-none
                   w-8 h-8 rounded-full border border-accent/60
                   shadow-[0_0_20px_rgba(0,255,153,0.6)]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CyberCursor;
