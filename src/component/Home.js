import React from 'react'
import img from './image/10.jpg'
import img2 from './image/9.png'
import style from './css/Home.module.css'
function Home() {
  return (
    <div className={style.Home}>
      <h1>Muslim</h1>

      <div className={style.img}>
      <img src={img}  />
     

      </div>
      
    </div>
  ) 
}

export default Home
 