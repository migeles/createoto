import React from "react";

const title = () => {
  return (
    <div className='absolute bg-none w-full h-full flex flex-col justify-center items-start px-10 text-white gap-5'>
        <h1 className='futura-medium text-[10vw] leading-none'>
          Created
          <br />
          <span className='futura-heavy'>For Motion</span>
        </h1>
        <p className='text-[3vw] futura-medium'>
          Createoto are the industry standard in style <br />
          and performance, we are committed to relentlessly <br />
          striving for excellence innovation in our product
        </p>
        <div className="flex flex-row items-center gap-4">
          <div className="w-9">
            <hr />
          </div>
          <p className="futura-medium">
            <a href="">About Us</a>
          </p>
        </div>
    </div>
  );
};

export default title;
