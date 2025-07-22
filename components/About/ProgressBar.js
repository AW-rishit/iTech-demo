"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView
} from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function ProgressBar({ target = 100, duration = 2000, label = "Progress" }) {
  const progress = useMotionValue(0);
  const width = useTransform(progress, (v) => `${v}%`);
  const [displayValue, setDisplayValue] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(progress, target, {
        duration: duration / 1000,
        ease: "easeInOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });

      return () => controls.stop();
    }
  }, [isInView, target, duration, progress]);

  return (
    <div ref={ref} className="w-full bg-gray-300 rounded-full h-6 relative overflow-hidden">
      <motion.div
        className="h-full bg-red-500 rounded-full flex items-center justify-end px-2 text-white text-sm font-medium"
        style={{ width }}
      >
        <span>{displayValue}%</span>
      </motion.div>
    </div>
  );
}
