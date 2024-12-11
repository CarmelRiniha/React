import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  const [hamburger, setHamburger] = useState(false);
  function openHam() {
    setHamburger(!hamburger);
  }

  return (
    <div>
      <button
        onClick={openHam}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 fixed top-6 left-2 text-sm text-white rounded-lg sm:hidden bg-teal-700 hover:bg-teal-500 "
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-60 h-full bg-black  duration-300 sm:translate-x-0 ${
          hamburger ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3  xl py-4 overflow-y-auto bg-black ">
          {/* <ul className="space-y-2 text-3xl font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover bg-teal-100  bg-teal-500 group"
              >
                <span className="ms-3">A</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover bg-teal-100  bg-teal-500 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">B</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover bg-teal-100  bg-teal-500 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">C</span>
              </a>
            </li>
          </ul> */}
          <ul className="space-y-2 text-3xl text-white font-medium">
            <li className="flex items-center p-2 text-white rounded-lg hover:bg-teal-300 bg-teal-100  bg-teal-500 ">
              <Link to="/">
                A <a className="text-lg  text-teal-100">- Tabs , Quote</a>
              </Link>
            </li>
            <li className="flex items-center p-2 text-white rounded-lg  hover:bg-teal-300 bg-teal-100  bg-teal-500">
              <Link to="/b">
                B{" "}
                <a className="text-lg text-teal-100">- Carousel , Accordian</a>
              </Link>
            </li>
            <li className="flex items-center p-2 text-white rounded-lg hover:bg-teal-300 bg-teal-100  bg-teal-500 ">
              <Link to="/c">
                C <a className="text-lg  text-teal-100">- Form</a>
              </Link>
            </li>
            <li className="flex items-center p-2 text-white rounded-lg hover:bg-teal-300 bg-teal-100  bg-teal-500 ">
              <Link to="/d">
                D <a className="text-lg text-teal-100">- Swiper</a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
