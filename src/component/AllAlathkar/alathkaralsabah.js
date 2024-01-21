import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";

import style from"../css/styles.module.css";


function alathkar() {
  return (
    <div className={style.allSwiper}>
      <Swiper className={style.mySwiper}>
        <SwiperSlide>

          <p>
          بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (1)
ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ (2)
ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (3) مَٰلِكِ يَوۡمِ ٱلدِّينِ (4)
إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ (5) ٱهۡدِنَا
ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ (6) صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ
عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ
وَلَا ٱلضَّآلِّينَ (7)
          </p>
          <button>3</button>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default alathkar
