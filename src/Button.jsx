import React from "react";

function Button({ value, type }) {
  return (
    <button
      type={type}
      className="w-full py-2.5 px-5 mt-4 text-sm font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700  "
    >
      {value}
    </button>
  );
}

export default Button;
