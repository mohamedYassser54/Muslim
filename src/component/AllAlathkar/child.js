import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import img from './Child/image/1.png'
import img2 from './Child/image/2.png'
import img3 from './Child/image/3.png'

import './Child/style.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

function Child() {
  return (
    <div className='AllSwiper'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img} />
          <h1>مسلسلات</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <h1>صلاة</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <h1>أناشيد</h1>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
export default Child;