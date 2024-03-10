import React from 'react'
import { NavLink } from 'react-router-dom'
// import video from './video/1.mp4'
import ReactPlayer from 'react-player';
import style from '../css/ramadan.module.css'
import  '../css//btnram.css'
function ramadan() {
  return (
    <div className={style.alldiv}>
        <ReactPlayer
        url={require('./video/1.mp4')}
        className={style.video}
        playing={true}
        loop={true}
        muted={true}
        
      />
      
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
