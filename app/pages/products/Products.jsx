"use client";
import { useRef, useEffect } from "react";
import Title from "./title";
import ContentOne from "./Content/contentone";
import ContentTwo from "./Content/contenttwo";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const Products = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-200vw"]);

  // useMotionValueEvent(x, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  return (
    <motion.section
      id='product'
      ref={targetRef}
      className='relative h-[200vh] sm:h-[330vh] sm:w-[300vw] flex bg-black flex-col border-y-8 border-'>
      <div className='sticky top-0 sm:top-10 h-screen  items-center overflow-hidden'>
        <motion.div
          style={{ x }}
          className=' flex flex-row  w-[300vw] productsbg h-screen items-center'>
          <Title />
          <ContentOne parentRef={targetRef} />
          <ContentTwo parentRef={targetRef} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Products;
