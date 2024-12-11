import React from 'react'

function Quotegen({quote, author}) {
  return (
    <>
    <div className="mt-4">
    {quote ? (
      <h2 className="text-lg font-semibold text-center text-black italic">"{quote}"</h2>
    ) : (
      <h2 className="text-lg font-medium text-center text-gray-600">  Click the button to get a quote</h2>
    )}
    <p className="mt-2 text-md text-center text-gray-500">- {author}</p>
    </div>
  </>
  )
}

export default Quotegen
