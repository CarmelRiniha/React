import React from "react";

function Input({ type, onChange, name, ...rest }) {
  return (
    <>
      <input
        onChange={onChange}
        className="bg-gray-50  border h-10 border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5"
        type={type}
        name={name}
        {...rest}
      />
    </>
  );
}

export default Input;
