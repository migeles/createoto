"use client";
import React from "react";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { motion } from "framer-motion";

const text = () => {
  const animate = {
    initial: { y: "120%" },
    open1: {
      y: "0%",
      transition: { duration: 0.75, delay: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const target1 = useRef(null);

  const inView1 = useInView(target1, { once: true, margin: "-30%" });

  return (
    <div
      className='pointer-events-none futura-medium text-xs sm:text-[2vh]  text-white  flex justify-center items-center w-[70vw] sm:w-[40vw]  z-10 '
      ref={target1}>
      <motion.h1
        className=' text-justify leading-normal'
        variants={animate}
        initial='initial'
        animate={inView1 ? "open1" : ""}>
        Create Oto adalah sebuah merek otomotif yang menawarkan produk-produk
        perawatan kendaraan dengan kualitas tinggi. Berkomitmen untuk memberikan
        produk-produk terbaik yang memenuhi standar tinggi dalam perawatan
        kendaraan dan terus berinovasi dalam mengembangkan produk-produnkya.{" "}
        <br />
        <br />
        <span className="sm:hidden">
          {" "}
          Menghadirkan teknologi terbaru dengan formula khusus yang efektif
          dalam merestorasi dan merawat kendaraan, seperti produk Instant Tire
          Foam dan Dashboard Restorer yang memberikan hasil yang maksimal.{" "}
          <br /> <br />
          Dirancang dengan perhatian terhadap kemudahan penggunaan sehingga
          pemilik kendaraan dapat merawat kendaraan mereka dengan
          cepat dan nyaman.
        </span>
      </motion.h1>
    </div>
  );
};

export default text;
