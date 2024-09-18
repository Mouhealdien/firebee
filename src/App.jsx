import "./App.css";
import Banner from "./components/Banner";
import Box from "./components/Box";
import Footer from "./components/Footer";
import Help from "./components/Help";
import Nav from "./components/Nav";
import Questions from "./components/Questions";
import Signals from "./components/Signals";
import ballon from "./assets/ballon2.png";
import GallerySection from "./components/GallerySection";

function App() {
  return (
    <div className="font-poppins ">
      <div className="bg-[url('assets/head.png')] text-center bg-center bg-cover flex items-center justify-center  h-[74px] overflow-hidden relative">
        <img
          className="transform scale-x-[-1] absolute -left-48 md:-left-24 lg:left-0 top-5 sm:top-0 z-10 "
          src={ballon}
          alt=""
        />
        <p className=" text-white text-[24px] max-w-60 lg:max-w-[26rem] mt-1  uppercase font-inter font-bold z-20">
          Black Friday Sale Save $100
        </p>
        <img
          className="absolute  -right-48 lg:right-0 md:-right-24 top-5   sm:top-0 z-10"
          src={ballon}
          alt=""
        />
      </div>

      <Nav />
      <GallerySection />
      <Banner />
      <Signals />
      <Help />
      <Box />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
