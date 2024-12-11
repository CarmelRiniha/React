import React from "react";

function Label({ name }) {
  return (
    <label className="block mb-2 mt-2 text-sm font-medium text-gray-700">
      {name}
    </label>
  );
}

export default Label;