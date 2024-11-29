import React from "react";

export default function Card({ id, images, name, description, isActive }) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 hover:border-gray-900  mt-10 mb-10">
        <p>
          <div className="flex justify-center mb-2 mt-2">
            <p className="font-bold"> {id}</p>
          </div>
          <img className="object-fill h-48 w-96" src={images}></img>
          <p className=" mb-2  pl-3.5 font-sans text-sm mt-2">Name : {name}</p>
          <p className=" mb-2  pl-3.5 font-sans text-sm">
            Description : {description}
          </p>
          <div className="flex justify-center mb-2">
            {isActive ? (
              <button className=" bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg  text-white font-bold py-1 px-3 rounded">
                ON
              </button>
            ) : null}
          </div>
        </p>
      </div>
    </>
  );
}
