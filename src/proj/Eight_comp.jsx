import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function Eight_comp(prop) {
   
  return (
  <>
    <div className='flex'>
        <i onClick={()=>{
            prop.select(prop.id)
        }}><DeleteForeverIcon/></i>
       <li>{prop.text}</li>
    </div>
    </>
  )
}

export default Eight_comp
