"use client";
import React from "react";
import Picture from "./picture";
import Image from "next/image";
import Logo from "../../assets/images/logo/createoto logo.png";
import { motion } from "framer-motion";

const title = () => {
  return (
    <motion.div className='relative w-full flex flex-row justify-between items-center px-[15vw] text-white  sm:mt-[10vh] '>
      <div className='flex flex-col z-20'>
        <h3 className='futura-heavy text-xl sm:text-[5vh] hidden sm:flex'>
          Follow Our Official Instagram Account!{" "}
        </h3>
        <h3 className='futura-heavy text-xl sm:text-[5vh] sm:hidden flex'>
          Follow Our Instagram!{" "}
        </h3>
        <span className='futura-medium text-xs sm:text-[1vw] pt-3 sm:pt-6'>
          Jadi lah yang pertama untuk mengetahui tentang produk terbaru kita
        </span>
        <motion.button
          whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
          className='bg-none border-4 border-white py-2 px-1 rounded-full mt-5 sm:mt-10 futura-heavy w-40 sm:w-64 h-10 text-xs sm:text-[1vw] flex  justify-center items-center'>
          <h1 className='whitespace-nowrap'>Visit Our Instagram</h1>
        </motion.button>
      </div>
      <a
        href='https://www.instagram.com/createoto.official/'
        className='z-20 bg-black w-48 h-48 p-8 sm:flex justify-center items-center rounded-full hidden  '>
        <Image alt="logo" src={Logo} className='brightness-125 contrast-125' />
      </a>
      <Picture />
    </motion.div>
  );
};

export default title;
