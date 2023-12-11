"use client";
import Title from './title'
import Slider from './slider'
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useTransform, useScroll, useMotionValueEvent } from "framer-motion";

const hero = () => {
  const targetRef = useRef(null);
  
  return (
    <div id='hero' ref={targetRef} className='w-full h-screen relative overflow-hidden'>
      <Title parentRef={targetRef}/>
      <Slider />
    </div>
  )
}

export default hero