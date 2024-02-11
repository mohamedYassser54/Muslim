import React, { useState,useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from"../css/styles.module.css";

function Istikhara() {
  
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
          <p className={style.font2}>
            
اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي
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

export default Istikhara;
