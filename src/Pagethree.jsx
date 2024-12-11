import React from 'react'
import Studentform from './Studentform'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
function Pagethree({setIsRegistered,appdata}) {
  return (
    <div className='h-screen w-auto bg-teal-100 flex flex-col'>
    <NavBar setIsRegistered={setIsRegistered} appdata={appdata}/>
    <Studentform/>
    <Sidebar />
  </div>
  )
}

export default Pagethree