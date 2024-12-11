import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

function NavBar({ formdata, setIsRegistered }) {
  const [logOutModal, setLogOutModal] = useState(false);
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <div className="h-30 w-auto flex">
      <div className="h-20 w-screen">
        <nav className="bg-black text-white p-4 flex justify-end items-center">
          <div className="">
            <div className="text-2xl">{name}</div>
            <div className="text-sm">{email}</div>
          </div>
          <button
            onClick={() => setLogOutModal(true)}
            type="button"
            className="ml-3 text-red-500"
          >
            <FontAwesomeIcon icon={faPowerOff} className="h-6" />
          </button>
        </nav>

        {/* Modal */}
        {logOutModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg p-6">
              <button
                onClick={() => setLogOutModal(false)}
                className="absolute top-2 right-2 w-4 text-teal-800 hover:text-gray-600"
              >
                X
              </button>
              <div className="text-center">
                <h3 className="mb-5 text-lg font-normal text-black">
                  Are you sure you want to log out?
                </h3>
                <button
                  onClick={() => {
                    setLogOutModal(false);
                    setIsRegistered(false);
                  }}
                  className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700 mr-2"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setLogOutModal(false);
                    setIsRegistered(true);
                  }}
                  className="px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-900"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
