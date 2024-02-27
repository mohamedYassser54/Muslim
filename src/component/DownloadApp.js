import React from 'react'
import img4 from './image/4.png'
import img5 from './image/7.png'
import app from "./Muslim.apk"
// import app2 from "./.DS_Store"
import style from './css/download.module.css'
function DownloadApp() {
  return (
    <div className={style.allDown}>
    <div className={style.bac}>
      <a href={app} download>
      <div className={style.image}>
        <img src={img4} alt="" />
        <div className={style.text}>
          <h5>Download the App Now!</h5>
        </div>
      </div>
      </a>
    </div>
    </div>
  )
}

export default DownloadApp;
