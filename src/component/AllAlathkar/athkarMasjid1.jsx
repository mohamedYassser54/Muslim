import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from"../css/styles.module.css";

function AthkarMasjid1() {
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
           <h3 className={style.color}>  {number.number}</h3>
          </div>
          <div className={style.text}>
          <p>
          (بسمِ اللهِ توكلْتُ على اللهِ لا حولَ ولا قوةَ إلا باللهِ).
         </p>
         <p>(اللَّهُمَّ إنِّي أعوذُ بكَ أنْ أضِلَّ، أو أُضَلَّ، أو أَزِلَّ، أو أُزَلَّ، أو أَظلِمَ، أو أُظلَمَ، أو أَجهَلَ، أو يُجهَلَ عليَّ).
         </p>
         <p>
         (اللَّهُمَّ اجْعَلْ في قَلْبِي نُورًا، وفي بَصَرِي نُورًا، وفي سَمْعِي نُورًا، وعَنْ يَمِينِي نُورًا، وعَنْ يَسارِي نُورًا، وفَوْقِي نُورًا، وتَحْتي نُورًا، وأَمامِي نُورًا، وخَلْفِي نُورًا، واجْعَلْ لي نُورًا).
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

export default AthkarMasjid1
