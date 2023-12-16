"use client";
import Title from './Title'
import Slider from './slider'
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useTransform, useScroll, useMotionValueEvent } from "framer-motion";

const Hero = () => {
  const targetRef = useRef(null);
  
  return (
    <div id='hero' ref={targetRef} className='w-full h-screen relative overflow-hidden'>
      <Title parentRef={targetRef}/>
      <Slider />
    </div>
  )
}

export default Hero