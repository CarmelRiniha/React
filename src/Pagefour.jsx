import React from "react";
import Sidebar from "./Sidebar";
// import Navdemo from "./Navdemo";
import NavBar from "./NavBar.jsx";
// import SwiperComponent from "./Swiper.jsx";
import Swiperdemo from "./Swiperdemo.jsx";
function Pagefour({ setIsRegistered, formdata }) {
  return (
    <div className="h-screen w-auto bg-teal-100 flex flex-col items-center">
      <NavBar setIsRegistered={setIsRegistered} formdata={formdata} />
      <Sidebar />
      <Swiperdemo />
    </div>
  );
}

export default Pagefour;
