import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
function Navdemo() {
  return (
    <div className="h-30 w-auto flex">
    <div className="h-20 w-screen">
      <nav className="bg-black text-white p-4 flex justify-end items-center">
        <div>
          <div className="text-lg">Name</div>
          <div className="text-sm">Email</div>
        </div>
        <button

          type="button"
          className="ml-3 text-red-500"
        >
          <FontAwesomeIcon icon={faPowerOff} className="h-6" />
        </button>
      </nav>

      {/* Modal */}
      {/* {logOutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6">
            <button
              
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              X
            </button>
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-700">
                Are you sure you want to log out?
              </h3>
              <button
               
                className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 mr-2"
              >
                Yes
              </button>
              <button
              
                className="px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  </div>
  )
}

export default Navdemo
