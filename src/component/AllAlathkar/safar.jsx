import React, { useState,useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from"../css/styles.module.css";

function Sarar() {
  
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
           <p className={style.p}>
           اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ،
           </p>
           <p className={style.p}>(سُبْحانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ * وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ).

           </p>
           <p className={style.p}>
           (اللهمَّ إنا نسألُك في سفرِنا هذا البِرَّ والتقوى ومن العمل ِما ترضى اللهمَّ هوِّنْ علينا سفرَنا هذا واطوِ عنَّا بُعدَه اللهمَّ أنت الصاحبُ في السفرِ والخليفةُ في الأهلِ اللهمَّ إني أعوذُ بك من وعثاءِ السفرِ وكآبةِ المنقلبِ وسوءِ المنظرِ في الأهلِ والمالِ )
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

export default Sarar;
