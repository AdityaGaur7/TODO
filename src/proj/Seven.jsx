import React, { useState } from 'react'

function Seven() {

    const [nam,setname]= useState();
 
    const inp = (e)=>{
        console.log(e.target.value);
      setname(e.target.value);
    }
    const [naam,setnaam]=useState();

   const upt =()=>{
     setnaam(nam);
   }
  return (
    <div>
      <h1>{naam}</h1>
      <input type="text" placeholder='write anything'onChange={inp} value={nam}/>
      <button onClick={upt}>submit</button>
    </div>
  )
}

export default Seven
