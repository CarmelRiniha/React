import React from "react";
import Button from "./Button";
import { datas } from "./Datas";
import { useState } from "react";
function App() {
  const[input,setInput]=useState("");

  function handleclick(value){
    if(value =='AC'){
      setInput(" ");
    }
    else if(value=='='){
      setInput(eval(input))
    }
    else if(value =='CLR'){
      setInput(input.slice(0,-1))
    }
    else{
    setInput(input + value);}
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200">
      
        <h1 className="text-4xl text-blue-800 font-bold mb-6">CALCULATOR</h1>
      

      <input  
        value={input}
        type="text"
        id="small-input"
        class="w-80 h-12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-white text-xl mb-6 text-center focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <div className="grid grid-cols-4 gap-4">
        {datas.map((key) => (
          <Button id={key.id} value={key.value}
          handleClick={()=>handleclick(key.value)} />
        ))}
      </div>
    </div>
  );
}

export default App;
