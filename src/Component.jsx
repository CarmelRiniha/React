import React from 'react'

function Component(props) {
  return (
    <div >
      <button style={{backgroundColor: props.favi == props.curId ? 'red' : 'green'}}
       className='flex bg-blue-500  active:bg-green-700 text-dark focus:outline-none  focus:bg-green-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={props.btnclick}>{props.name}</button>
    </div>
  )
}

export default Component
