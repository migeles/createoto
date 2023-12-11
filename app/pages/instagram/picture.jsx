"use client";
import Image from "next/image";
import aboutBG from "../../assets/images/about/about-bg2.jpg";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useTransform, useScroll, useMotionValueEvent } from "framer-motion";

const picture = () => {
  const animate = {
    whileHover: {
      scale: 1.15,
      transition: { duration: 0.5 },
    },
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const inView = useInView(targetRef, { once: true, margin: "0%" });

  return (
    <motion.div
      ref={targetRef}
      variants={animate}
      initial='initial'
      className='bg-black absolute z-0 w-[85vw] sm:w-[80vw] h-52 sm:h-[35vh]  m-auto  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    rounded-3xl    overflow-hidden'>
      <motion.div
        className='w-full h-full '
        initial={{ scale: 1.1 }}
        variants={animate}
        style={{ x }}>
        <div className='object-cover w-full h-full saturate-100  rounded-3xl instabg'></div>
      </motion.div>
    </motion.div>
  );
};

export default picture;
