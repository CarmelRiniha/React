import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Table from "./Table";
function Studentform() {
  const[view,setView]=useState(false);
  const[oneRow,setOneRow]=useState({name:'',phno:'',gender:'',dob:''});
  const[allInfo,setAllInfo]=useState([]);
  const[toedit,setToedit]=useState(null);

  function openmodal(){
    setView(true);
  }

  function closemodal(){
    setView(false);
    setToedit(null);
  }



  return (
    <>
    <div className="flex h-screen w-auto items-center justify-center">
    {/* screen div */}
        <div className="bg-gray-100 flex w-4/6 rounded-lg  h-3/4">
        {/* gray box div */}
           <div className="flex flex-col  w-full">
            {/* first row strip */}
            <div className="flex justify-between items-start">
              <div className="text-xl flex pl-6 pt-6 font-bold">STUDENT DATA</div>
                <div className="flex h-16 pr-6 pt-6 ">
                <button
                type="button" onClick={openmodal}
                className="px-4 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 block text-white bg-teal-700 hover:bg-teal-800 font-medium rounded-lg text-sm  text-center "
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal  ">
                ADD
                </button>
                </div>
              </div>
          
           <Table allInfo={allInfo} openmodal={openmodal} setAllInfo={setAllInfo}  setToedit={setToedit} setOneRow={setOneRow} />
        </div>
     
      </div>

    </div>
       <Modal openmodal={view} allInfo={allInfo} closemodal={closemodal} setOneRow={setOneRow}   setAllInfo={setAllInfo}  oneRow={oneRow} toedit={toedit} />
       
    </>
  );
}

export default Studentform;

