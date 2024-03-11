import React from 'react'
import { NavLink } from 'react-router-dom'
import video from './video/1.mp4'
import style from '../css/ramadan.module.css'
import  '../css//btnram.css'
function ramadan() {
  return (
    <div className={style.alldiv}>
      {/* <video className={style.video} autoPlay muted loop>
        <source src={video}/>
      </video> */}
      
      <div className="btnram">
      <NavLink to="/Days">
      <button class="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text">المهام</span>
</button>
</NavLink>
    </div>
    </div>
  )
}

export default ramadan
