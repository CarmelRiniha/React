import React from "react";

function Input({ type, onChange,value, name, ...rest }) {
  return (
    <>
      <input
        onChange={onChange}
        className="bg-gray-50 h-10 focus:outline-none text-gray-900 text-sm rounded-lg w-96 p-2.5"
        type={type}
        name={name}
        value={value}
        {...rest}
      />
    </>
  );
}

export default Input;