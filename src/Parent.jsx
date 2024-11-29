import React from 'react'
import Backg from './Backg.jsx'
import {Colors} from './Colors.jsx'
function Parent() {
  return (
    <div>
       {Colors.map((colour) => (
          <Backg
            btn={colour.btn}
            clr={colour.clr}
          />
        ))}
    </div>
  )
}

export default Parent
