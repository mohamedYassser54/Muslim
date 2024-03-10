import React from 'react'
import { NavLink } from 'react-router-dom'
import img from './image/left.png'
import './css/navbar.css'
function navbarRam() {
  const back = () =>{
    window.history.back(-1)
  }
  return (
    <div className='navbarRam'>
        <div className="flexnav">
      <h1>مرحبا رمضان</h1>
      <img src={img} alt="" onClick={back}/>
      </div>

    </div>
  )
}

export default navbarRam
