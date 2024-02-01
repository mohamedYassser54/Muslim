import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import img from './Child/image/4.png'
import img2 from './Child/image/2.png'
import img3 from './Child/image/3.png'
import img4 from './Child/image/18.png'

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
          <NavLink  to="/Stories" className="NavLink">
          <img src={img} />
          <h1 className='textslide'>حكايات</h1>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink  to="/AlSalah" className="NavLink">
          <img src={img2} />
          <h1 className='textslide'>صلاة</h1>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink  to="/Nasheed" className="NavLink">
          <img src={img3} />
          <h1 className='textslide'>أناشيد</h1>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink  to="/Nasheed" className="NavLink">
          <img src={img4} />
          <h1 className='textslide'>جزء عم</h1>
          </NavLink>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
export default Child;