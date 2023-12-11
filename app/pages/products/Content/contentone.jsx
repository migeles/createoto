"use client" 
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Instant from "../../../assets/images/project/instant.png";
import InstantD from "../../../assets/images/project/instant.png";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useEffect } from "react";

const contentone = ({ parentRef }) => {
  
  const { scrollYProgress } = useScroll({
    target: parentRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-50", "50"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["-200px", "50px"]); //activefoam
  const x2 = useTransform(scrollYProgress, [0, 1], ["-100px", "-300px"]); // description
  const opacity = useTransform(scrollYProgress, [0, 0.15], ["0%", "100%"]);

  return (
    <div className='w-screen h-screen flex flex-col sm:flex sm:flex-row sm:justify-between relative'>
      <div className='hidden sm:flex'>
        <Title x={x} />
      </div>
      <div className='flex sm:hidden'>
        <Title />
      </div>

      <motion.div style={{ opacity }}>
        <ProductImage img={InstantD} />
      </motion.div>

      <Description
        x={x1}
        text='
          Dengan formulasi active foam dapat membersihkan, melindungi, dan
          mengembalikan warna hitam pada ban mobil sehingga terlihat baru.'
      />

      <ActiveFoam x={x1} />

      <div className="hidden sm:flex">
        <Highlight text='Tahan Air' top='33vh' />
        <Highlight text='Tahan Lama' top='40vh' />
        <Highlight text='Wet Looks' top='47vh' />
      </div>

      <div className="flex sm:hidden"> 
        <Highlight text='Tahan Air' top='27vh' />
        <Highlight text='Tahan Lama' top='30vh' />
        <Highlight text='Wet Looks' top='33vh' />
      </div>
    </div>
  );
};

function Description({ text, x }) {
 
  const isClient = typeof window !== 'undefined';

  const style = isClient && window.innerWidth > 640 ? { x: x } : {};
  return (
    <motion.div
      style={style}
      className='right-shadow-text-res absolute futura-medium text-white text-xs hidden sm:flex sm:text-[1vw] sm:w-[17vw] text-justify justify-center left-[23vw] sm:left-auto leading-normal top-[40vh] sm:right-[15vw] sm:top-[45vh] -translate-y-2/4'>
      <h1>{text}</h1>
    </motion.div>
  );
}

function Highlight({ text, top }) {
  return (
    <div
      className='left-shadow-res futura-bold text-white flex  justify-center absolute left-[8vw] sm:left-[16vw] rounded-full  sm:text-[7vh] futura-heavy '
      style={{ top: top }}>
      <span className='text-pink pr-3'>+ </span>
      <h1>{text}</h1>
    </div>
  );
}

function ActiveFoam({ x }) {
  
  const isClient = typeof window !== 'undefined';
  const style = isClient && window.innerWidth > 640 ? { x: x } : {};
  return (
    <motion.div
      style={style}
      className='right-shadow-box-res sm:w-[17vw] futura-heavy flex flex-row text-xs sm:text-[2vh]  gap-1 bg-white text-pink w-auto justify-center rounded-full px-5 sm:px-[3vw] py-[2vh] absolute sm:right-[15vw] left-[8vw] sm:left-auto top-[19vh] sm:top-[35vh] -translate-y-1/3'>
      <h3>Active Foam Formula</h3>
      <span> ++</span>
    </motion.div>
  );
}

function Title({ text, x }) {
  return (
    <motion.div
      // style={{ x }}
      className=' absolute bottom-20 sm:bottom-10 z-10 text-center sm:text-center sm:left-[0vw] w-full text-white'>
      <h1 className='text-[8vw] futura-medium text-shine-black w-full'>
        Black <span className=''>Shine</span> Tire Foam
      </h1>
    </motion.div>
  );
}

function ProductImage({ img }) {
  return (
    <Image
      alt='instant'
      src={img}
      className='rounded-md h-[100vh] -z-10  sm:flex sm:mr-[15vw] absolute left-10 sm:left-0 sm:right-0 -bottom-[10vh] sm:top-1/2 sm:-translate-y-2/4 object-contain'
    />
  );
}

export default contentone;
