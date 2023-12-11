import Image from "next/image";
import Arrow from "../../assets/images/project/arrow.svg";

const title = () => {
  return (
    <div className='relative text-white px-10 md:p-0 w-screen h-full flex flex-col sm:items-start sm:justify-start items-start justify-center'>
      <h1 className="futura-heavy text-[16vw] sm:text-[10vw] md:text-[20vh] md:pl-[5vw] shine pt-[10vh] leading-tight sm:leading-normal"><span className="futura-medium">Featured <br className="sm:hidden"/></span> Products</h1>
      <div className='flex flex-row items-center gap-4'>
        {/* <div className='w-9'>
          <hr />
        </div> */}
        <p className='futura-medium text-[6vw] md:pl-[5vw] md:text-[3vw]  md:pb-[10vh]'>
          <a href=''>Explore our Finest</a>
        </p>
      </div>
      <Image alt="logo" src={Arrow}  className="absolute right-24 bottom-24 w-[7vw]"/>
    </div>
  );
};

export default title;
