import React from 'react'

import {add,sub,mult,div} from './Four-cal'
function Four() {
  return (
    <div >
        <ul style={{color:'red',listStyle:'none'}}>
            <li>sum is {add(40,4)}</li>
            <li>{sub(40,4)}</li>
            <li>{mult(40,4)}</li>
            <li>{div(22,7)}</li>
        </ul>
      
    </div>
  )
}

export default Four
