import React, { useEffect } from 'react'
import img from './image/10.jpg'
import img2 from './image/14.png'
import img3 from './image/15.png'
import Aos from 'aos'
import  "aos/dist/aos.css" 
import style from './css/Home.module.css'

function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div>
    <div className={style.Home} data-aos="fade-up">
      <h1>Muslim</h1>

      <div className={style.img}>
      <img src={img}  />
      </div>
    </div>
    <div className={style.img2} data-aos="fade-bottom">
    <div className={style.text}>
        <h1 data-aos="fade-right">طريقه التنزيل التطبيق :</h1>
        <h4 data-aos="fade-right"> <span>.</span>اضغط علي تحميل التطبيق </h4>
        <h4 data-aos="fade-up"> <span>.</span>اختار طريقة التحميل </h4>
        <h4 data-aos="fade-bottom"> <span>.</span>عند التنزيل التطبيق اختار install anyway</h4>
        </div>
        <img src={img2} alt="" data-aos="fade-left"/>
        
      </div>
      <div className={style.img3} data-aos="fade-bottom">
    <div className={style.text}>
        <h1 data-aos="fade-up">هذا المشروع تم تطويره بواسطة:</h1>
        <h4 data-aos="fade-right"> <span>.</span>Mohamed Yasser</h4>
        <h4 data-aos="fade-left"> <span>.</span>Omnia Gaber</h4>
        </div>
        <img src={img3} alt="" data-aos="fade-left"/>
        
      </div>
    </div>
  ) 
}

export default Home
 