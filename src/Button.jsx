import React from 'react'

function Button({value,handleClick}) {
  return (
    <button className="px-8 py-4 text-2xl font-semibold rounded-lg bg-blue-900 text-white transition-all transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleClick}>{value}</button>
  )
}

export default Button
