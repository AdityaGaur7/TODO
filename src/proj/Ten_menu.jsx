import React from 'react'
import { NavLink } from 'react-router-dom'
function Ten_menu() {
  return (
    <div className='Navbar'>
      <NavLink to="/">ToDoList</NavLink> 
      <NavLink to="/WallPapers">MineWallPapers</NavLink>
      <NavLink to="/Pkmn">SrchPkmn</NavLink>
      <NavLink to="/Samay">Time</NavLink>
      <NavLink to="/Greet">Greet</NavLink>
      <NavLink to="/KuchBhiLikho">KuchBhi</NavLink>
      <NavLink to="/TarikPeTarik">AxaThikHai</NavLink>
      <NavLink to="/PtaNhiKyaHai">Test </NavLink>
    </div>
  )
}

export default Ten_menu
