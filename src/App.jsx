import React from "react";
import Form from "./Form";
import { useState } from "react";
function App() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    phno: "",
  });

  function handlechange(e) {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  }

  function handlesubmit(e) {
    e.preventDefault();
    console.log(formdata);
  }
  console.log(formdata);
  return (
    // <div className="h-screen w-auto  justify-center items-center flex bg-blue-100">
    //   <div className="h-96 w-96 ">
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="mb-4 text-3xl text-center font-bold">Register</h1>
        <Form handlesubmit={handlesubmit} handlechange={handlechange} />
      </div>
    </div>
  );
}

export default App;
