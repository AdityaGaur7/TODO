import React from 'react'

function Second() {
    const name = 'Aditya Gaur'
    // const dat = ()=>{
    //     let time = new Date();
    //     return time.getHours();
    // }
    let time = new Date();
    let date = time.toLocaleDateString();
    let tm = time.toLocaleTimeString();
  return (
    <div>
        <h1>My name is {name}</h1>
        <p>todays date is {date}</p>
        <p>current time is {tm}</p>
    </div>
  )
}

export default Second
  