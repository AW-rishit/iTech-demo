"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "../Navbar/Button"

export default function PostHero(){

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const isInView1 = useInView(ref1, { once: true, margin: "-50px" });
    const isInView2 = useInView(ref2, { once: true, margin: "-50px" });
    const isInView3 = useInView(ref3, { once: true, margin: "-50px" });

    return(
        <div className="flex mt-[10rem] w-[90vw] m-auto gap-[5rem]">
            <div className="overflow-hidden" ref={ref1}>
                <motion.div
                    initial={{ y: "100%" }}
                    animate={isInView1 ? { y: 0 } : {}}
                    transition={{ duration: 1, ease: "linear" }}
                >
                    <div className="w-fit">
                        <img src="/assets/network.svg" alt="network graphic" className="h-[3.5rem]"/>
                        <p className="tracking-tighter text-red-500 font-semibold text-2xl mt-[0.5rem]">IT Expertise</p>
                        <p className="w-[16rem] leading-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,.</p>
                    </div>
                </motion.div>
            </div>
            <div className="overflow-hidden" ref={ref2}>
                <motion.div
                    initial={{ y: "100%" }}
                    animate={isInView2 ? { y: 0 } : {}}
                    transition={{ duration: 1, ease: "linear", delay: 0.2 }}
                >
                    <div className="w-fit">
                        <img src="/assets/support.svg" alt="network graphic" className="h-[3.5rem]"/>
                        <p className="tracking-tighter text-red-500 font-semibold text-2xl mt-[0.5rem]">24/7 IT Support</p>
                        <p className="w-[16rem] leading-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,.</p>
                    </div>
                </motion.div>
            </div>
                
            {/* <div className="h-[12rem] w-[1px] bg-gray-400 mx-[0rem]" /> */}

            <div className="overflow-hidden" ref={ref3}>
            
                <div className="flex ml-[-3rem]">
                    <img src="/assets/7090038.jpg" className="h-[18rem] mt-[-3rem] "/>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={isInView2 ? { x: 0 } : {}}
                        transition={{ duration: 1.5, ease: "linear", delay: 0.3 }}
                    >
                        <div>
                            <p className="tracking-tighter text-red-500 font-semibold text-2xl mt-[0.5rem]">Custom Solution</p>
                            <p className="w-[16rem] leading-none mb-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,.</p>
                            <Button text = {'Find Solution'}/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}