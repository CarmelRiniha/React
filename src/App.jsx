import React from "react";
import Form from "./Form";
import Pagethree from "./Pagethree"
import Pagetwo from "./Pagetwo"; 
import Pageone from "./Pageone"; 
import Pagefour from "./Pagefour";
import { useState } from "react";
import {  Routes, Route } from "react-router-dom";


// import Pageone from "./Pageone";
function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    phno: "",
  });
  // const[appdata,setAppdata]=useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   phno: "",
  // })

  function handlechange(e) {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  }
  

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-teal-200">
      {isRegistered ? (
         <Routes>
   
         <Route index element={<Pageone  setIsRegistered={setIsRegistered}/>} />
         <Route path="/b" element={<Pagetwo setIsRegistered={setIsRegistered}/>} />
         <Route path="/c" element={<Pagethree setIsRegistered={setIsRegistered}/>} />
         <Route path="/d" element={<Pagefour setIsRegistered={setIsRegistered}/>} />
     </Routes>
      
         ) : (
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
          <h1 className="mb-4 text-3xl text-center font-bold">Register</h1>
          <Form
            handlechange={handlechange}
            formdata={formdata}
            setFormdata={setFormdata}
            setIsRegistered={setIsRegistered}
            
          />
        </div>
      )}
    </div>
  );
}

export default App;
