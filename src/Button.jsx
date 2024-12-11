import React from "react";

function Button({ value, type }) {
  return (
    <button
      type={type}
      className="w-full py-2.5 px-5 mt-4 text-sm font-medium text-white rounded-lg bg-teal-900 hover:bg-teal-600  "
    >
      {value}
    </button>
  );
}

export default Button;