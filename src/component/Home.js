import React from 'react'
import img from './image/10.jpg'
import img2 from './image/13.jpg'
// import img3 from './image/1.jpg'
import style from './css/Home.module.css'
function Home() {
  return (
    <div>
    <div className={style.Home}>
      <h1>Muslim</h1>

      <div className={style.img}>
      <img src={img}  />
     

      </div>
     

      
    </div>
    <div className={style.img2}>
    <div className={style.text}>
        <h1>طريقه التنزيل التطبيق :</h1>
        <h4> <span>.</span>اضغط علي تحميل التطبيق </h4>
        <h4> <span>.</span>اختار طريقة التحميل </h4>
        <h4> <span>.</span>عند التنزيل التطبيق اختار install anyway</h4>
        </div>
        <img src={img2} alt="" />
        
      </div>
    </div>
  ) 
}

export default Home
 