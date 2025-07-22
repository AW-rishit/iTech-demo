"use client";
import { motion } from "framer-motion";
import Button from "../Navbar/Button";
import CountUp from "./Countup";

export default function Hero() {
  return (
    <div className="flex flex-col gap-[2rem] w-[90vw] m-auto mt-[11rem]">
      {/* Heading Reveal Container */}
      <div className="overflow-hidden w-[40rem]">
        <motion.p
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-black text-8xl tracking-tighter"
        >
          Future-Proof Your Business.
        </motion.p>
      </div>

      <div className="overflow-hidden w-[38rem]">
        <motion.p
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="tracking-tighter text-[1.5rem] font-thin"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar.
        </motion.p>
      </div>

      <div className="flex">
        <div className="overflow-hidden">
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "linear" }}
            >
                <Button text={"Contact Us"} />
            </motion.div>
        </div>
        <div className="h-[3.5rem] w-[1px] bg-gray-400 mx-[2rem]" />
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "linear" }}
          >
              <div className="flex">
                <CountUp
                  from={0}
                  to={172}
                  separator=","
                  direction="up"
                  duration={0.8}
                  className="count-up-text text-2xl font-mono tracking-tighter font-bold"
                />
                <p className="font-mono text-2xl tracking-tighter font-bold">k+</p>
              </div>
              <p className="font-semibold text-red-500">Project Completed</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
