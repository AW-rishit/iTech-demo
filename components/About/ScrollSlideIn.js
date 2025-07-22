// components/ScrollSlideIn.jsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollSlideIn({ children, xFrom = "-100%", xTo = "0%", delay = 0, start = -0.5, end = 0.7 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // When it starts entering and ends exiting
  });

  const x = useTransform(scrollYProgress, [start, end], [xFrom, xTo]);

  return (
    <motion.div ref={ref} style={{ x }} transition={{ delay }}>
      {children}
    </motion.div>
  );
}
