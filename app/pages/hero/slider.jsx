"use client";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { motion } from "framer-motion";
const slider = () => {
  const animateVideo = {
    initialVideo: { opacity: "0%" },
    initialbg: { backgroundColor: "#000000" },

    video: {
      opacity: "100%",
      transition: { duration: 0.75, delay: 3.4, ease: [0.33, 1, 0.68, 1] },
    },
    bgcolor: {
      backgroundColor: "#1a1a1a",
      transition: { duration: 2 },
    },
  };
  return (
    <motion.div
      className='w-full h-screen bg-gray-800 absolute top-0 z-10 border-b-8 border-white'
      variants={animateVideo}
      initial='initialbg'
      animate='bgcolor'>
      <motion.video
        variants={animateVideo}
        initial='initialVideo'
        animate='video'
        className='w-full h-full object-cover'
        src='https://api.tanyatimal.studio/uploads/tanyatimal_request_9101fc0b2d.mp4'
        autoPlay
        loop
        muted></motion.video>
    </motion.div>
  );
};

export default slider;
