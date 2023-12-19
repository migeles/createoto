'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../assets/images/logo/createoto logo.png";
import { motion } from "framer-motion";
import Sidebar from "./sidebar";

const Navbar = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        direction: "horizontal",
        direction: "horizontal",
        mobile: {
          breakpoint: 0,
          smooth: true,
          direction: "horizontal",
        },
        tablet: {
          breakpoint: 0,
          smooth: true,
          direction: "horizontal",
        },
      });
    })();
  }, []);

  useEffect(() => {
    // Disable scrolling
    document.body.classList.add("stop-scrolling");
    document.documentElement.classList.add("stop-scrolling");

    // Enable scrolling after 5000 milliseconds (adjust as needed)
    const enableScroll = setTimeout(() => {
      document.body.classList.remove("stop-scrolling");
      document.documentElement.classList.remove("stop-scrolling");
    }, 5000);

    return () => {
      // Cleanup: Enable scrolling and clear the timeout
      document.body.classList.remove("stop-scrolling");
      document.documentElement.classList.remove("stop-scrolling");
      clearTimeout(enableScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   console.log(isActive);
  //   if (isActive) setIsActive(!isActive);
  // }, [isActive]);

  const animate = {
    initial: { width: "0%" },
    initHidden: { opacity: "0%" },
    open: {
      width: "100%",
      padding: "0 5vw",
      transition: { duration: 2, ease: [0.83, 0.01, 0.17, 1] },
    },
    show: {
      opacity: "100%",
      transition: { duration: 0.5, delay: 2, ease: [0.33, 0.11, 1, 1] },
    },
  };
  return (
    <motion.nav
      className='header bg-white h-14 md:h-24 fixed flex flex-row justify-between border-b-4 border-white z-50 top-0 start-0 '
      variants={animate}
      initial='initial'
      animate='open'>
      {/* mobile navbar */}
      <motion.div
        className='h-full w-20 relative'
        variants={animate}
        initial='initHidden'
        animate='show'>
        <Image
          src={Logo}
          layout='fill'
          objectFit='contain'
          className='pic-shine'
          alt='logo'
        />
      </motion.div>
      <div
        className='flex justify-center items-center'
        animate={true ? { scale: 1 } : { scale: 0 }}>
        <motion.div
          onClick={() => {
            setIsActive(!isActive);
          }}
          variants={animate}
          initial='initHidden'
          animate='show'
          className='button z-50'>
          <div className={`burger ${isActive ? `burgerActive` : ""} `}></div>
        </motion.div>
      </div>

      <Sidebar open={isActive} />
      <div className='hidden'></div>
    </motion.nav>
  );
};

export default Navbar;
