import React from "react";
import Sidebar from "./Sidebar";
// import Navdemo from "./Navdemo";
import NavBar from "./NavBar.jsx";
// import SwiperComponent from "./Swiper.jsx";
import { CarouselDefault } from "./Carousel.jsx";
import AccordianH from "./Accordian.jsx";
function Pagetwo({ setIsRegistered, formdata }) {
  return (
    <div className="h-screen w-auto bg-teal-100 flex flex-col items-center">
      <NavBar setIsRegistered={setIsRegistered} formdata={formdata} />
      <Sidebar />
      {/* <SwiperComponent/> */}
      <CarouselDefault />
      <div className="w-96 justify-center">
        <AccordianH />
      </div>
    </div>
  );
}

export default Pagetwo;
