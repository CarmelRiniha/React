import React from 'react'

function Phonenumber() {
  return (
    <>
    <input
      onChange={onChange}
      className="bg-gray-50 border mb-4 h-10 border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5"
      type={type}
      name={name}
      maxLength={10}
    />
  </>
  )
}

export default Phonenumber
