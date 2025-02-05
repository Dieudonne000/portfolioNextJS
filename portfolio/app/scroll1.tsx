"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { ReactNode } from "react";

const Scroll1 = ({ children }: { children: ReactNode }) => {
  const [direction, setDirection] = useState("left");
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const randomDirection = Math.random() < 0.5 ? "left" : "right";
    setDirection(randomDirection);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0 });
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default Scroll1;
