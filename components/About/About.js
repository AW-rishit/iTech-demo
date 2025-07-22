"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import ProgressBar from "./ProgressBar";
import ScrollSlideIn from "./ScrollSlideIn";


export default function About() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-50px" });

  // 📸 Image scroll animation setup
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"], // triggers when image enters viewport
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div className="flex mt-[10vh] w-[90vw] m-auto">
      {/* ✅ IMAGE scroll-animated with scale + fade */}
      <div className="overflow-hidden" ref={imageRef}>
        <motion.img
          src="/assets/about.svg"
          className="h-[50vh]"
          style={{ scale, opacity }}
        />
      </div>

      <div>
        <p className="text-red-500 text-xl">| About iTech |</p>

        <div className="overflow-hidden" ref={ref1}>
            <ScrollSlideIn delay={0.5}>
                <p className="text-7xl font-bold tracking-tighter w-[30rem] my-[1rem]">
                    Experts in Tech Evolution.
                </p>
            </ScrollSlideIn>

        </div>

        <p className="text-2xl font-thin">
          As an IT Solution and Services Company, we have a value in fulfilling
          our clients’ satisfaction.
        </p>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="overflow-hidden" ref={ref1}>
                <ScrollSlideIn delay={2} start = {0.2} end={0.5}>
                    <p className="text-red-500 text-4xl tracking-tighter font-medium w-[15rem] mt-[3rem]">
                    Innovation and Adaptability
                    </p>
                    <p className="text-xl w-[22rem]">
                    Driving continuous innovation to deliver cutting-edge, tailored
                    solutions that evolve with technology and your needs.
                    </p>
                </ScrollSlideIn>             
            </div>

            <div className="overflow-hidden" ref={ref1}>
            <ScrollSlideIn delay={0.5} start = {-0.2} end={0.3}>
                <p className="text-red-500 text-4xl tracking-tighter font-medium w-[18rem] mt-[3rem]">
                    Customer-Centric Excellence
                </p>
                <p className="text-xl w-[22rem]">
                    Driving continuous innovation to deliver cutting-edge, tailored
                    solutions that evolve with technology and your needs.
                </p>
              </ScrollSlideIn>
            </div>
          </div>

          <div>
            <div className="mt-[3rem] overflow-hidden" ref={ref1}>
                <ScrollSlideIn delay={0.5} start = {0.2} end={0.5}>
                    <p className="text-2xl w-[22rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                    tellus, luctus nec ullamcorper mattis,.
                    </p>
                </ScrollSlideIn>
            </div>

            <div className="mt-[3rem]">
              <p className="text-2xl font-semibold text-red-500">IT Support</p>
              <ProgressBar target={86} duration={2500} />
            </div>
            <div className="mt-[2rem]">
              <p className="text-2xl font-semibold text-red-500">IT Security</p>
              <ProgressBar target={94} duration={2500} />
            </div>
            <div className="mt-[2rem]">
              <p className="text-2xl font-semibold text-red-500">Cloud Support</p>
              <ProgressBar target={90} duration={2500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
