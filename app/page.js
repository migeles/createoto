import Hero from "./pages/hero/Hero";
import About from "./pages/about/about";
import Products from "./pages/products/Products";
import Instagram from "./pages/instagram/container";
import Contact from "./pages/contact/contact";
import Navbar from "./pages/navbar/Navbar";

export default function Home() {
  
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll({
  //       direction: "horizontal",
  //       direction: "horizontal",
  //       mobile: {
  //         breakpoint: 0,
  //         smooth: true,
  //         direction: "horizontal",
  //       },
  //       tablet: {
  //         breakpoint: 0,
  //         smooth: true,
  //         direction: "horizontal",
  //       },
  //     });
  //   })();
  // }, []);
  return (
    <main className='w-full h-full bg-[#1a1a1a]'>
      <Navbar />
      <Hero />
      <About />
      <Products />
      {/* <Instagram /> */}
      <Contact />
    </main>
  );
}
