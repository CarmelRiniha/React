import React from "react";

export default function Background() {
  const a = document.body.style;
  a.backgroundColor = "black";
  function blue() {
    a.backgroundColor = "blue";
  }
  function red() {
    a.backgroundColor = "red";
  }
  function yellow() {
    a.backgroundColor = "yellow";
  }

  function green() {
    a.backgroundColor = "green";
  }
  function purple() {
    a.backgroundColor = "purple";
  }
  function dark() {
    a.backgroundColor = "black";
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex">
        <button
          onClick={blue}
          className="h-12 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          blue
        </button>
        <button
          onClick={purple}
          className="h-12 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Purple
        </button>
        <button
          onClick={red}
          className="h-12 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          red
        </button>
        <button
          onClick={green}
          className="h-12 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          green
        </button>
        <button
          onClick={yellow}
          className="h-12 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          yellow
        </button>
        <button
          onClick={dark}
          className="h-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Black
        </button>
      </div>
    </div>
  );
}
