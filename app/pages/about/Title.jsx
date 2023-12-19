"use client";
import Text from "./Text";
import Image from "next/image";
import Logo from "../../assets/images/logo/createoto logo.png";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { motion } from "framer-motion";

const Title = () => {
  const animate = {
    initial: { y: "120%" },
    open: {
      y: "0%",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
    },
    open1: {
      y: "0%",
      transition: { duration: 0.75, delay: 0.3, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const target1 = useRef(null);

  const inView1 = useInView(target1, { once: true, margin: "-30%" });
  return (
    <div className='pointer-events-none futura-heavy text-[10vw]  md:text-[7vh] text-white absolute flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full h-full z-10 px-5 sm:px-[15vw] py-[15vh] sm:py-[10vh] gap-8 '>
      <div
        className='flex  flex-col justify-start w-full h-full sm:h-auto items-center sm:items-start overflow-hidden gap-3'
        ref={target1}>
        <div className='overflow-hidden futura-heavy text-[5vh]'>
          <motion.h1
            className='shine '
            variants={animate}
            initial='initial'
            animate={inView1 ? "open" : ""}>
            About <span className=' '>Us</span>{" "}
          </motion.h1>
        </div>

        <motion.div
          variants={animate}
          initial='initial'
          animate={inView1 ? "open1" : ""}></motion.div>
        <Text />
      </div>
      <Image
        className='w-auto h-10 sm:h-16 hidden sm:flex '
        alt='logo'
        src={Logo}
      />
    </div>
  );
};

export default Title;
