import React, { useState } from 'react'



function Six() {
    let time = new Date().toLocaleTimeString();
    const [tm,setTime]=useState(time);

const Update = () =>{
    
    const ok = new Date().toLocaleTimeString();
    setTime(ok);
}

// setInterval(Update,1000);

setInterval(() => {
    Update();
}, 1000);

  return (
    <div>
     <h1 style={{color:'white',fontFamily:'cursive'}}>{tm}</h1> 
     {/* <button onClick={Update} style={{backgroundColor:"red",color:'yellow'}}>click</button> */}
    </div>
  )
}

export default Six
