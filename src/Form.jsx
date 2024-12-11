import React from "react";
import Label from "./Label";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

function Form({ handlechange, formdata, setFormdata ,setIsRegistered}) {
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [phnoErr, setPhnoErr] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false); 

  function handlesubmit(e) {
    e.preventDefault();
    if (
      !nameErr &&
      !emailErr &&
      !passErr &&
      !phnoErr &&
      formdata.name.length != 0 &&
      formdata.phno.length != 0 &&
      formdata.email.length != 0 &&
      formdata.password.length != 0
    ) {
      setFormdata({ name: "", email: "", password: "", phno: "" });
      console.log(formdata);
      setIsRegistered(true);
      // setAppdata({...formdata})
      localStorage.setItem('name', formdata.name)
      localStorage.setItem('email', formdata.email)
      setAlertVisible(false); 
    }else {
      setAlertVisible(true);
    }
    
  }

  function passwordVisibility() {
    setShowPassword(!showPassword);
  }

  function namefn(e) {
    const value = e.target.value;
    const nameRegex = /^[a-zA-Z0-9 . _]+$/;
    let a = nameRegex.test(value);
    if (!a) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
  }
  function pwfn(e) {
    const value = e.target.value;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,10}$/;
    let b = passwordRegex.test(value);
    if (!b) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  }
  function phnofn(e) {
    const value = e.target.value;
    const phoneRegex = /^(0|91)?[6-9][0-9]{9}$/;
    let c = phoneRegex.test(value);
    if (!c) {
      setPhnoErr(true);
    } else {
      setPhnoErr(false);
    }
  }
  function emailfn(e) {
    const value = e.target.value;
    const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let d = emailRegex.test(value);
    if (!d) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  }
  return (
    <form
      noValidate
      onSubmit={(e) => {
        handlesubmit(e);
      }}
    > {alertVisible && (
      <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-300 dark:border-red-800" role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        
        <div>
          <span className="font-medium">Warning alert!</span> Enter all the fields before submitting!
        </div>
      </div>
    )}
      <Label name="Name *" />
      <Input
        type="text"
        name="name"
        value={formdata.name}
        onChange={(e) => {
          namefn(e), handlechange(e);
        }}
      />
      {nameErr && <p className="text-red-500 text-sm">Enter valid Username</p>}
      <Label name="Email *" />
      <Input
        value={formdata.email}
        type="email"
        name="email"
        onChange={(e) => {
          emailfn(e), handlechange(e);
        }}
      />
      {emailErr && (
        <p className="text-red-500 text-sm">Enter a valid email address</p>
      )}

      <Label name="Password *" />
      <div className="flex bg-gray-50  h-10  text-gray-900 text-sm rounded-lg ">
        <Input
          value={formdata.password}
          type={showPassword ? "text" : "password"}
          name="password"
          maxLength={12}
          onChange={(e) => {
            pwfn(e), handlechange(e);
          }}
        />
        <button
          type="button"
          onClick={passwordVisibility}
          className="text-gray-600"
        >
          {showPassword ? (
            <img
              src="https://cdn0.iconfinder.com/data/icons/graphic-design-2-4/48/120-512.png"
              className=" pr-2 h-4"
            ></img>
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLmN5QKhx5PHd6P1uP8S_Vmq2l72jkiYYRxKZR3uPPVvajWMveacfce8phKE7iLbv8Vk&usqp=CAU"
              className=" pr-2 h-4"
            ></img>
          )}
        </button>
      </div>
      {passErr && <p className="text-red-500 text-sm">Password must have uppercase,lowercase,number,special char and 6-10 chars.</p>}

      <Label name="Phone Number *" />
      <Input
        value={formdata.phno}
        type="tel"
        name="phno"
        maxLength={10}
        onChange={(e) => {
          phnofn(e), handlechange(e);
        }}
      />
      {phnoErr && (
        <p className="text-red-500 text-sm">Enter valid phone number</p>
      )}
      <Button value="Submit" type="submit" />
    </form>
  );
}

export default Form;