import React from "react";
import TabsDefault from "./Tabs";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Quote from "./Quote";
function Pageone({ setIsRegistered, formdata }) {
  return (
    <div className="h-screen w-auto bg-teal-100 flex flex-col">
      <NavBar setIsRegistered={setIsRegistered} formdata={formdata} />

      <div className="flex justify-center m-16 items-center ">
        <TabsDefault />
      </div>
      <div className="flex justify-center">
        <Quote />
      </div>
      <Sidebar />
    </div>
  );
}

export default Pageone;
{
  /* <div>
       
<NavBar setIsRegistered={setIsRegistered} formdata={formdata}/>

 

<div className='flex '>
  <Sidebar />
  <div className='flex flex-col justify-center m-16 items-center '>
      <TabsDefault /> 
      <Quote/>
</div>
</div>
</div> */
}
