import React, { useState,useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// image
import img1 from './image2/1.png'
import img2 from './image2/2.png'

// audio
import audio from './audio/1.mp3'
import audio2 from './audio/2.mp3'
import audio3 from './audio/3.mp3'
import audio4 from './audio/4.mp3'


import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import style from"../css/styles.module.css";

function AlathkarAlsabah() {
  const [isPlaying, setIsPlaying] = useState(null);
  const [number ,setNumber] = useState({
    number : 1,
    number2:1,
    number3:3,
  });
  const swiperRef = useRef(null);
  const click = (key) => {
    if (key in number) {
      setNumber((prevState) => ({
        ...prevState,
        [key]: prevState[key] - 1,
      }));

      if(
         (key === 'number' && number.number === 1)||
         (key === 'number2' && number.number2 === 1) 
        //  (key === 'number3' && number.number3 === 3)
         ) {
        swiperRef.current.slideNext();
      }
     if(
      (key === "number" && number.number === 0)||
      (key === "number2" && number.number2 === 0)
      ){
        setNumber((prevState)=>({
          ...prevState,
          number:0,
          number2:0
        }))
      }
     
    }
  };

  const audioRef = useRef({});

  function toggleAudio(key) {
    const audio = audioRef.current[key];
  
    // Check if the audio object is defined
    if (audio) {
      if (isPlaying === key && !audio.paused) {
        audio.pause();
        setIsPlaying(0); // Set to a value that doesn't match any key
      } else {
        audio.play();
        setIsPlaying(key);
      }
    } else {
      console.error(`Audio element for key ${key} is undefined.`);
    }
  }
  
    
  
  return (
    <div className={style.allSwiper}>
      <Swiper 
      className={style.mySwiper}
         spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >

        {/* 1 */}
        <SwiperSlide>
          <div className={style.image}>
           <img src={img1} alt="" onClick={() => toggleAudio(1)} key={1} />
           <h1><span>{number.number}</span> مره</h1>
           <img src={img2} alt="" onClick={() => toggleAudio(2)} key={2} />
           <audio src={isPlaying === 1 ? audio : audio} ref={(ref) => audioRef.current[1] = ref} />
          <audio  src={isPlaying === 2 ? audio2 : audio2} ref={(ref) => audioRef.current[2] = ref} />


          </div>
          <div className={style.text}>
          <h4>أَعُوذُ بِاللَّهِ مِنَ الشَّيطَانِ الرَّجِيمِ</h4>
          <h5>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h5>
          <p>
          (1)
        ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ (2)
        ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (3) مَٰلِكِ يَوۡمِ ٱلدِّينِ (4)
        إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ (5) ٱهۡدِنَا
        ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ (6) صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ
        عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ
         وَلَا ٱلضَّآلِّينَ (7)
         </p>
          </div>
          <button className={style.btn_class} onClick={() => click('number')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>
        </SwiperSlide>

        {/* 2 */}
        <SwiperSlide>
        <div className={style.image}>
          <img src={img1} alt="" onClick={()=>toggleAudio(4)}  key={4}/>
           <h1><span>{number.number2}</span> مره</h1>
          <img src={img2} alt="" onClick={()=>toggleAudio(3)} key={3}/>
          <audio src={isPlaying === 3 ? audio3 : audio3} ref={(ref) => audioRef.current[3] = ref} />
          <audio src={isPlaying === 4 ? audio4 : audio4} ref={(ref) => audioRef.current[4] = ref} />
          </div>
        <div className={style.text}>
        <h4>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h4>
          <p>
الم (1) ذلِكَ الْكِتابُ لا رَيْبَ فِيهِ هُدىً لِلْمُتَّقِينَ (2) الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلاةَ وَمِمَّا رَزَقْناهُمْ يُنْفِقُونَ (3) وَالَّذِينَ يُؤْمِنُونَ بِما أُنْزِلَ إِلَيْكَ وَما أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ (4)
أُولئِكَ عَلى هُدىً مِنْ رَبِّهِمْ وَأُولئِكَ هُمُ الْمُفْلِحُونَ (5)
          </p>
        </div>
        <button className={style.btn_class} onClick={() => click('number2')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>
        </SwiperSlide>

        {/* 3 */}
        {/* <SwiperSlide>

        </SwiperSlide> */}



        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default AlathkarAlsabah;
