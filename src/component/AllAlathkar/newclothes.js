import React, { useState,useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from"../css/styles.module.css";

function Newclothes() {
  
    const [number ,setNumber] = useState({
      number : 1
      })
      const click = (key) => {
        if (key in number) {
          setNumber((prevState) => ({
            ...prevState,
            [key]: prevState[key] - 1,
          }));
    
            if(
              (key === "number" && number.number === 0)
              ){
                setNumber((prevState)=>({
                  ...prevState,
                  number:0,
                }))
              }
            } 
          }
    return (
      <div>
       {/* 1 */}
       <div className={style.allSwiper}>
       <Swiper 
        className={style.mySwiper2}>
       <SwiperSlide>
        
            <div className={style.image}>
             <h3 className={style.color}>  {number.number} </h3>
            </div>
            <div className={style.text}>
          <p className={style.font5}>
          ( اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ)         
          </p>
          
            </div>
            <button className={style.btn_class} onClick={() => click('number')}>
            <span className={style.back}></span>
            <span className={style.front}></span>
            </button>   
            </SwiperSlide>
            </Swiper>
            </div>
          
  
      </div>
    
  )
}

export default Newclothes;
