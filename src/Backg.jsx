import React from "react";

export default function Backg({ btn, clr }) {
  function handleClick() {
    document.body.style.backgroundColor = clr;
  }
  return (
    <div>
      <button style={{backgroundColor:clr}}
        onClick={handleClick}>
        {btn}
      </button>
    </div>
  );
}
