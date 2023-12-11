"use client";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { motion, useScroll, useTransform } from "framer-motion";

const title = () => {
  const animate = {
    initial: { y: "100%" },
    initial1: { x: "-100%" },
    open: {
      y: "0%",
      transition: { duration: 0.75, delay: 3.4, ease: [0.33, 1, 0.68, 1] },
    },
    open1: {
      y: "0%",
      transition: { duration: 0.75, delay: 3.5, ease: [0.33, 1, 0.68, 1] },
    },
    open2: {
      y: "0%",
      transition: { duration: 0.75, delay: 3.6, ease: [0.33, 1, 0.68, 1] },
    },
    open3: {
      y: "0%",
      transition: { duration: 0.75, delay: 3.7, ease: [0.33, 1, 0.68, 1] },
    },
    leftOpen1: {
      y: "0%",
      transition: { duration: 0.75, delay: 3.7, ease: [0.33, 1, 0.68, 1] },
    },
    leftOpen1: {
      x: "0%",
      transition: { duration: 0.75, delay: 4, ease: [0.33, 1, 0.68, 1] },
    },
    leftOpen2: {
      x: "0%",
      transition: { duration: 0.75, delay: 4.2, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const target1 = useRef(null);

  const inView1 = useInView(target1, { once: true });

  const { scrollYProgress } = useScroll({
    target: target1,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "80%"]);
  return (
    <motion.div  style={{y}} className='absolute z-20 bg-none w-full h-full flex flex-col justify-center items-start px-10  md:px-[5vw] text-white gap-5 overflow-hidden'>
      <div className='overflow-hidden'>
        <motion.h1
          className='futura-medium text-[10vw] md:text-[7vh]  leading-tight'
          ref={target1}
          variants={animate}
          initial='initial'
          animate={inView1 ? "open" : ""}>
          Created
          <br />
          <span className='futura-heavy'>For Motion</span>
        </motion.h1>
      </div>

      <div className=''>
        <div className='overflow-hidden'>
          {" "}
          <motion.p
            className='text-[3vw] md:text-[3vh] futura-medium'
            ref={target1}
            variants={animate}
            initial='initial'
            animate={inView1 ? "open1" : ""}>
            Createoto are the industry standard in style
          </motion.p>
        </div>

        <div className='overflow-hidden'>
          <motion.p
            className='text-[3vw] md:text-[3vh] futura-medium'
            ref={target1}
            variants={animate}
            initial='initial'
            animate={inView1 ? "open2" : ""}>
            and performance, we are committed to relentlessly
          </motion.p>
        </div>
        <div className='overflow-hidden'>
          <motion.p
            className='text-[3vw] md:text-[3vh] futura-medium'
            ref={target1}
            variants={animate}
            initial='initial'
            animate={inView1 ? "open3" : ""}>
            striving for excellence innovation in our product
          </motion.p>
        </div>
      </div>

      <div className='flex flex-row items-center gap-4'>
        <div className=' items-center gap-4 overflow-hidden'>
          <motion.div
            className='w-[5vh]'
            ref={target1}
            variants={animate}
            initial='initial1'
            animate={inView1 ? "leftOpen1" : ""}>
            <hr />
          </motion.div>
        </div>

        <div className='overflow-hidden'>
          <motion.p
            className='futura-medium text-[3vw] md:text-[3vh] overflow-hidden'
            ref={target1}
            variants={animate}
            initial='initial1'
            animate={inView1 ? "leftOpen2" : ""}>
            <motion.a href=''>About Us</motion.a>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default title;
