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

  const inView = useInView(targetRef, { once: false, margin: "-40%" });

  return (
    <motion.div
      variants={animate}
      initial='initial'
      ref={targetRef}
      className='bg-black   absolute w-[85vw] sm:w-[80vw] h-[80vh] sm:h-[35vh] m-auto left-0 right-0 rounded-3xl bottom-0 top-0  overflow-hidden'>
      <motion.div
        className='w-full h-full '
        initial={{ scale: 1.1 }}
        variants={animate}
        whileHover='whileHover'
        style={{ x }}>
        <Image
          alt='aboutbg'
          src={aboutBG}
          className='object-cover w-full h-full saturate-100 brightness-[.55] rounded-3xl'
        />
      </motion.div>
    </motion.div>
  );
};

export default picture;
