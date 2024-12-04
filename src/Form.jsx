import React from "react";
import Label from "./Label";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Form({ handlechange, handlesubmit }) {
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [phnoErr, setPhnoErr] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,12}$/;
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
      onSubmit={(e) => {
        handlesubmit(e);
      }}
    >
      <Label name="Name *" />
      <Input
        type="text"
        name="name"
        onChange={(e) => {
          namefn(e), handlechange(e);
        }}
      />
      {nameErr && <p className="text-red-500 text-sm">Enter valid name</p>}
      <Label name="Email *" />
      <Input
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
      {/* <div> */}
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        onChange={(e) => {
          pwfn(e), handlechange(e);
        }}
      />
        {/* <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-3 text-gray-600"
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button> */}
      {passErr && <p className="text-red-500 text-sm">Enter valid password</p>}
      {/* </div> */}
      
      <Label name="Phone Number *" />
      <Input
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
