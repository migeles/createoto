"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ open }) => {
  // Check if window is defined
  const isClient = typeof window !== 'null';
// 
  const sidebarVariants = {
    hidden: {
      x: "0vw",
      borderRadius: "100% 0% 0% 100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      x: isClient && window.innerWidth <= 640 ? "-100vw" : "-28vw",
      borderRadius: "0% 0% 0% 0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className='absolute -right-[100vw] sm:-right-[28vw] bg-black bg-opacity-70 sm:bg-opacity-100 sm:w-[28vw] w-screen h-screen z-30'
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={sidebarVariants}>
          <SidebarContent />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;

function SidebarContent() {
  return (
    <div className='flex w-full h-full justify-center items-center p-20'>
      <div className='text-white futura-heavy flex flex-col gap-6 w-full justify-start text-3xl'>
        <a href='#hero'>Home</a>
        <a href='#about'>About</a>
        <a href='#product'>Products</a>
        <a href='#instagram'>Instagram</a>
      </div>
      <SideFooter />
    </div>
  );
}

function SideFooter() {
  return (
    <div className='absolute bottom-0 flex flex-col w-full px-20 pb-10 gap-3 text-white text-xs'>
      {/* <hr className='text-white px-10' /> */}
      <div>
        <h1 className="text-gray-500">Olshop</h1>
      </div>
      <div className='flex flex-row justify-start gap-5  '>
        <a href="https://www.tokopedia.com/createoto-3">tokopedia</a>
        <a href="https://shopee.co.id/shop/1081838564">shopee</a>
        <a href="https://www.lazada.co.id/shop/createoto/?spm=a2o4j.pdp_revamp.seller.1.3320631dmAkCu9&itemId=7861074560&channelSource=pdp">lazada</a>
      </div>
    </div>
  );
}
