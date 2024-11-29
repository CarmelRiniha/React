import React from 'react';
import random from 'random-string-generator';
import { useState } from 'react';
function App() {
  
  const [slidervalue, setSlidervalue] = useState(8);
  const [sValue, setSValue]=useState(false);
  const [nValue, setNValue]=useState(false);


  function generateAlpha(){
    if(sValue == true && nValue == true){
      const pwfield=document.getElementById("password");
      pwfield.value=specialCharNum();
    }
    else if(sValue != true && nValue == true){
    const pwfield=document.getElementById("password");
    pwfield.value=random(Number(slidervalue),'alphanumeric');
    }
    else if(sValue == true && nValue != true){
      const pwfield=document.getElementById("password");
      pwfield.value=specialChar();
      }
      else{
        const pwfield=document.getElementById("password");
      pwfield.value=random(Number(slidervalue),'lower');
      }
  }
  function generateNum(){
    setNValue(!nValue);
    if(!nValue == true && sValue != true){
      const pwfield=document.getElementById("password");
      pwfield.value=random(Number(slidervalue),'alphanumeric');
    }
    else if(sValue == true &&  !nValue != true){
      const pwfield=document.getElementById("password");
      pwfield.value=specialChar();
    }
    else if(!nValue == true && sValue == true){
      const pwfield=document.getElementById("password");
      pwfield.value=specialCharNum();
    }
    else{
      const pwfield=document.getElementById("password");
      pwfield.value=random(Number(slidervalue),'lower');
    }
  } 


  function generateSpclChar(){
    setSValue(!sValue);
    if(!sValue == true && nValue != true){
      const pwfield=document.getElementById("password");
      pwfield.value=specialChar();
    }
    else if(!sValue != true && nValue == true ){
      const pwfield=document.getElementById("password");
      pwfield.value=random(Number(slidervalue),'alphanumeric');
    }
    else if(!sValue == true && nValue == true){
      const pwfield=document.getElementById("password");
      pwfield.value=specialCharNum();
    }
    else{
      const pwfield=document.getElementById("password");
      pwfield.value=random(Number(slidervalue),'lower');
    }
  }

  function Range(e){
   const newSlider=e.target.value;
    setSlidervalue(newSlider);
    const v = e.target.value
    const a=Number(v);
    if(sValue == true && nValue == true){
      const pwfield=document.getElementById("password");
      pwfield.value=specialCharNumNew(newSlider);
    }
    else if(sValue != true && nValue == true){
    const pwfield=document.getElementById("password");
    pwfield.value=random(a,'alphanumeric');
    }
    else if(sValue == true && nValue != true){
      const pwfield=document.getElementById("password");
      pwfield.value=specialCharNew(newSlider);
      }
      else{
        const pwfield=document.getElementById("password");
      pwfield.value=random(a,'lower');
      }

  }

  
  return (
    <>
    <div className="flex justify-center items-center h-screen">
          <div className="h-50 w-96 bg-sky-100 rounded-xl ">
                  <label  className="mb-2 pt-20 px-6 font-medium text-sky-950 ">Password</label>
                  <input  id="password" onClick={generateAlpha}  className="w-80 mx-6 border text-sm rounded-lg p-2.5 bg-sky-600 border-sky-600 text-white" />
            <div className=" checkbox flex pt-4 px-6 justify-between">
                <div className="flex items-center">
                  <input id="link-checkbox" type="checkbox" onClick={generateSpclChar} className="w-4 h-4 px-6 pt-8 text-sky-600 bg-sky-700 border-sky-600"/>
                  <label  className="ms-2  font-medium  text-sky-950">Special Characters</label>
                </div>
                <div  className="flex items-center">
                  <input id="link-checkbox" type="checkbox" onClick={generateNum} className="w-4 h-4 px-6 pt-8 text-sky-600 bg-sky-700 border-sky-600"/>
                  <label  className="ms-2   font-medium  text-sky-950">Numbers</label>
                </div>
            </div>
            <div  className="flex items-center mt-8">
               <label  className="mb-2 px-6  font-medium text-sky-950">Range</label>
               <input id="minmax-range" type="range" min="8"  defaultValue='8' max="20" onChange={Range}  className="w-3/5 h-2 rounded-lg cursor-pointer bg-sky-950"/>
               <p>{slidervalue}</p>
            </div>
         </div> 
  </div>
    </>
  )

  function specialChar(){
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+\|{};:/?.>"
    let result = "";
    for(let i=0;i<Number(slidervalue);i++){
      result += characters.charAt(Math.floor(Math.random() * characters.length)) ;
    }
    return result;
  }
  function specialCharNew(newSlider){
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+\|{};:/?.>"
    let result = "";
    for(let i=0;i<Number(newSlider);i++){
      result += characters.charAt(Math.floor(Math.random() * characters.length)) ;
    }
    return result;
  }

  function specialCharNum(){
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+\|{};:/?.>1234567890"
    let result = "";
    for(let i=0;i<Number(slidervalue);i++){
      result += characters.charAt(Math.floor(Math.random() * characters.length)) ;
    }
    return result;
  }
  function specialCharNumNew(newSlider){
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+\|{};:/?.>1234567890"
    let result = "";
    for(let i=0;i<Number(newSlider);i++){
      result += characters.charAt(Math.floor(Math.random() * characters.length)) ;
    }
    return result;
  }
}

export default App

