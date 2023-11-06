"use client";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

const picture = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  })

  const y = useTransform(scrollYProgress, [0, 100], [0, 300]);


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  return (
    <motion.div
      ref={ref}
      
      className='bg-gray-500 absolute w-[60vw] h-[70vh] m-auto left-0 right-0 bottom-0'></motion.div>
  );
};

export default picture;
