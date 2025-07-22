"use client";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";

import ProgressBar from "./ProgressBar"

export default function About(){

    const ref1 = useRef(null);

    const isInView1 = useInView(ref1, { once: true, margin: "-50px" });



    return(
        <div className="flex mt-[10vh] w-[90vw] m-auto">
            <div className="overflow-hidden" ref={ref1}>
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={isInView1 ? { x: 0 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img src="/assets/about.svg" className="h-[50vh]"/>
                </motion.div>
            </div>
            <div>
                <p className="text-red-500 text-xl">| About iTech |</p>
                <div className="overflow-hidden" ref={ref1}>
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={isInView1 ? { x: 0 } : {}}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                    >
                        <p className=" text-7xl font-bold tracking-tighter w-[30rem] my-[1rem]">Experts in Tech Evolution.</p>
                    </motion.div>
                </div>
                <p className="text-2xl font-thin">As an IT Solution and Services Company, we have a value in fulfilling our clients’ satisfaction.</p>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="overflow-hidden" ref={ref1}>
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={isInView1 ? { x: 0 } : {}}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            >
                                <p className="text-red-500 text-4xl tracking-tighter font-medium w-[15rem] mt-[3rem]">Innovation and Adaptability</p>
                                <p className="text-xl w-[22rem]">Driving continuous innovation to deliver cutting-edge, tailored solutions that evolve with technology and you needs.</p>
                            </motion.div>
                        </div>
                        <div className="overflow-hidden" ref={ref1}>
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={isInView1 ? { x: 0 } : {}}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                            >
                                <p className="text-red-500 text-4xl tracking-tighter font-medium w-[18rem] mt-[3rem]">Customer-Centric Excellence</p>
                                <p className="text-xl w-[22rem]">Driving continuous innovation to deliver cutting-edge, tailored solutions that evolve with technology and you needs.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-[3rem] overflow-hidden" ref={ref1}>
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={isInView1 ? { x: 0 } : {}}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                            >
                                <p className="text-2xl w-[22rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,.</p>
                            </motion.div>
                        </div>
                        <div>
                            <div className="mt-[3rem]">
                                <p className="text-2xl font-semibold text-red-500">IT Support</p>
                                <ProgressBar target={86} duration={2500}/>
                            </div>
                            <div className="mt-[2rem]">
                                <p className="text-2xl font-semibold text-red-500">IT Security</p>
                                <ProgressBar target={94} duration={2500}/>
                            </div>
                            <div className="mt-[2rem]">
                                <p className="text-2xl font-semibold text-red-500">Cloud Support</p>
                                <ProgressBar target={90} duration={2500}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}