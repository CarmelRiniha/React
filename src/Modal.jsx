// import React from "react";

// function Modal({
//   openmodal,
//   closemodal,
//   setAllInfo,
//   setOneRow,
//   oneRow,
//   allInfo,
//   toedit,
// }) {
//   if (!openmodal) return null;

//   function fetchinput(e) {
//     const { name, value } = e.target;
//     setOneRow((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   }

//   function addstudent() {
//     if (inputValidation()) {
//       if (toedit !== null) {
//         const updatedInfo = [...allInfo];
//         updatedInfo[toedit] = oneRow;
//         setAllInfo(updatedInfo);
//       } else {
//         setAllInfo([...allInfo, oneRow]);
//       }
//       setOneRow({ name: "", phno: "", gender: "", dob: "" });
//       closemodal();
//     }
//   }

//   function inputValidation() {
//     if (oneRow.name.trim() === "") {
//       alert("Name is required");
//       return false;
//     }

//     const nameRegex = /^[A-Za-z\s]+$/;
//     if (!oneRow.name.match(nameRegex)) {
//       alert("Enter a valid name");
//       return false;
//     }

//     const phoneRegex = /^\d{10}$/;
//     if (!oneRow.phno.match(phoneRegex)) {
//       alert("Enter a valid phone number )");
//       return false;
//     }

//     if (oneRow.gender === "") {
//       alert("Select gender");
//       return false;
//     }

//     const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
//     if (!oneRow.dob.match(dobRegex)) {
//       alert("Enter a valid Date of Birth ");
//       return false;
//     }
//     return true;
//   }

//   return (
//     <>
//       <div
//         id="static-modal"
//         data-modal-backdrop="static"
//         className="overflow-y-auto overflow-x-hidden fixed  z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
//       >
//         <div className="relative w-96  bg-white rounded-lg shadow ">
//           <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//             <h3 className="text-xl font-semibold text-gray-900 ">
//               Student Details
//             </h3>
//             <button
//               type="button"
//               onClick={closemodal}
//               className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//               data-modal-hide="static-modal"
//             >
//               <svg
//                 className="w-3 h-3"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                 />
//               </svg>
//               <span className="sr-only">Close modal</span>
//             </button>
//           </div>

//           <form className="max-w-xl mx-auto ">
//             <div className="w-80">
//               {/* name */}
//               <div className="col-span-2 px-6 pt-2">
//                 <label
//                   htmlFor="name"
//                   className="block  mb-2 text-sm font-medium text-stone-900 "
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={oneRow.name}
//                   id="name"
//                   onChange={fetchinput}
//                   className="bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
//                   placeholder="Enter your name"
//                   required=""
//                 />
//               </div>
//               {/* phno */}
//               <div className="col-span-6 sm:col-span-6">
//                 <div className="col-span-2 w-full p-6">
//                   <label
//                     htmlFor="phone name"
//                     className="block mb-2 text-sm font-medium text-stone-900 "
//                   >
//                     Phone number
//                   </label>
//                   <input
//                     type="tel"
//                     onChange={fetchinput}
//                     value={oneRow.phno}
//                     name="phno"
//                     id="phonenumber"
//                     maxLength={10}
//                     className="bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
//                     placeholder="Enter your number"
//                     required=""
//                   />
//                 </div>
//                 {/* gender */}
//                 <div className="col-span-2 px-6 sm:col-span-1">
//                   <label
//                     htmlFor="category"
//                     className="block mb-2 text-sm font-medium text-stone-900 "
//                   >
//                     Gender
//                   </label>
//                   <select
//                     id="category"
//                     name="gender"
//                     value={oneRow.gender}
//                     onChange={fetchinput}
//                     className="bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="others">Others</option>
//                   </select>
//                 </div>
//                 {/* dob */}
//                 <div className="flex flex-col p-6 mb-4">
//                   <label
//                     htmlFor="inputDob"
//                     className="block mb-2 text-sm font-medium text-stone-900"
//                   >
//                     Enter your Date of Birth
//                   </label>
//                   <input
//                     name="dob"
//                     id="inputDob"
//                     type="date"
//                     value={oneRow.dob}
//                     onChange={fetchinput}
//                     className="
//                 bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg f block w-full p-2.5 border border-stone-300
//                        rounded-md px-4 py-2 "
//                   />
//                 </div>
//               </div>
//             </div>
//           </form>
//           <div className="flex items-center justify-between p-4 md:p-5 border-t border-gray-200 rounded-b">
//             <button
//               data-modal-hide="static-modal"
//               type="button"
//               onClick={closemodal}
//               className="px-4 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700"
//             >
//               Close
//             </button>
//             <button
//               data-modal-hide="static-modal"
//               type="submit"
//               onClick={addstudent}
//               className="px-4 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Modal;

import React, { useState } from "react";

function Modal({
  openmodal,
  closemodal,
  setAllInfo,
  setOneRow,
  oneRow,
  allInfo,
  toedit,
}) {
  if (!openmodal) return null;

  const [errors, setErrors] = useState({
    name: "",
    phno: "",
    gender: "",
    dob: "",
  });

  function fetchinput(e) {
    const { name, value } = e.target;
    setOneRow((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function addstudent() {
    if (inputValidation()) {
      if (toedit !== null) {
        const updatedInfo = [...allInfo];
        updatedInfo[toedit] = oneRow;
        setAllInfo(updatedInfo);
      } else {
        setAllInfo([...allInfo, oneRow]);
      }
      setOneRow({ name: "", phno: "", gender: "", dob: "" });
      closemodal();
    }
  }

  function inputValidation() {
    let isValid = true;
    const newErrors = {
      name: "",
      phno: "",
      gender: "",
      dob: "",
    };

    if (oneRow.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if (oneRow.name && !oneRow.name.match(nameRegex)) {
      newErrors.name = "Enter a valid name";
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (oneRow.phno && !oneRow.phno.match(phoneRegex)) {
      newErrors.phno = "Enter a valid phone number";
      isValid = false;
    }

    if (oneRow.gender === "") {
      newErrors.gender = "Select gender";
      isValid = false;
    }

    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (oneRow.dob && !oneRow.dob.match(dobRegex)) {
      newErrors.dob = "Enter a valid Date of Birth";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  return (
    <>
      <div
        id="static-modal"
        data-modal-backdrop="static"
        className="overflow-y-auto overflow-x-hidden fixed  z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-96 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Student Details
            </h3>
            <button
              type="button"
              onClick={closemodal}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form className="max-w-xl mx-auto">
            <div className="w-80">
              {/* Name */}
              <div className="col-span-2 px-6 pt-2">
                <label
                  htmlFor="name"
                  className="block  mb-2 text-sm font-medium text-stone-900 "
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={oneRow.name}
                  id="name"
                  onChange={fetchinput}
                  className={`bg-stone-50 border  text-stone-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                  placeholder="Enter your name"
                  required=""
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="col-span-6 sm:col-span-6">
                <div className="col-span-2 w-full p-6">
                  <label
                    htmlFor="phone name"
                    className="block mb-2 text-sm font-medium text-stone-900 "
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    onChange={fetchinput}
                    value={oneRow.phno}
                    name="phno"
                    id="phonenumber"
                    maxLength={10}
                    className={`bg-stone-50 border  text-stone-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                    placeholder="Enter your number"
                    required=""
                  />
                  {errors.phno && (
                    <p className="text-red-500 text-sm">{errors.phno}</p>
                  )}
                </div>

                {/* Gender */}
                <div className="col-span-2 px-6 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-stone-900 "
                  >
                    Gender
                  </label>
                  <select
                    id="category"
                    name="gender"
                    value={oneRow.gender}
                    onChange={fetchinput}
                    className={`bg-stone-50 border  text-stone-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5`}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-sm">{errors.gender}</p>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col p-6 mb-4">
                  <label
                    htmlFor="inputDob"
                    className="block mb-2 text-sm font-medium text-stone-900"
                  >
                    Enter your Date of Birth
                  </label>
                  <input
                    name="dob"
                    id="inputDob"
                    type="date"
                    value={oneRow.dob}
                    onChange={fetchinput}
                    className={`bg-stone-50 border text-stone-900 text-sm rounded-lg f block w-full p-2.5 border border-stone-300 rounded-md px-4 py-2`}
                  />
                  {errors.dob && (
                    <p className="text-red-500 text-sm">{errors.dob}</p>
                  )}
                </div>
              </div>
            </div>
          </form>

          <div className="flex items-center justify-between p-4 md:p-5 border-t border-gray-200 rounded-b">
            <button
              data-modal-hide="static-modal"
              type="button"
              onClick={closemodal}
              className="px-4 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
            <button
              data-modal-hide="static-modal"
              type="submit"
              onClick={addstudent}
              className="px-4 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
