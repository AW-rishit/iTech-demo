"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ScrollSlideIn({
  children,
  xFrom = "-100%",
  xTo = "0%",
  delay = 0,
  start = -0.5,
  end = 0.7,
  springOptions = { stiffness: 30, damping: 30 } // 💡 add this
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xRaw = useTransform(scrollYProgress, [start, end], [xFrom, xTo]);
  const x = useSpring(xRaw, springOptions); // 🎯 make motion slower/smoother

  return (
    <motion.div ref={ref} style={{ x }} transition={{ delay }}>
      {children}
    </motion.div>
  );
}
