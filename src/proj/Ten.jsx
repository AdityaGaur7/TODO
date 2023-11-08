import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import First from './First'
import Second from './Second'
import Third from './Third'
import Four from './Four'
import Five from './Five'
import Six from './Six'
import Seven from './Seven'
import Eight from './Eight'
import Nine from './Nine'
import Error from './Error'
import Menu from './Ten_menu'

function Ten() {
  
  return (
    <>
    <Menu/>
    <Routes>

 <Route exact path='/TopAnimeSeries' Component={First} />
 <Route exact path='/TarikPeTarik' Component={Second} />
 <Route exact path='/Greet' Component={Third} />
 <Route exact path='/PtaNhiKyaHai' Component={Four} />
 <Route exact path='/WallPapers' Component={Five} />
 <Route exact path='/Samay' Component={Six} />
 <Route exact path='/KuchBhiLikho' Component={Seven} />
 <Route exact path='/' Component={Eight} />
 <Route exact path='/Pkmn' Component={Nine} />
 <Route path='*' element={<Error/>}/>

     {/* <h1>ok</h1> */}
    </Routes>
    </>
  )
}

export default Ten
