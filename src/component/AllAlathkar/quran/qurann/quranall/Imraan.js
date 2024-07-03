import React, { useEffect, useState } from 'react';
import style from "../../../../css/quran1.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { NavLink } from 'react-router-dom';

import dataquran  from '../../data/DQImraan'
import { Flipper, Flipped } from 'react-flip-toolkit';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
// import './Book.css';

function AlBaqarah() {
  const [swiper, setSwiper] = useState(null); // حالة لتتبع Swiper instance

  useEffect(() => {
    if (swiper) {
      // إعادة تعيين حركة الصفحة إلى الشريحة السابقة عند تغييرها
      swiper.on('slideChange', () => {
        window.localStorage.setItem('swiperSlideIndex3', swiper.activeIndex);
      });

      // إعادة تعيين حركة الصفحة إلى الشريحة المحفوظة عند تحميل المكون
      const savedSlideIndex = window.localStorage.getItem('swiperSlideIndex3');
      if (savedSlideIndex) {
        swiper.slideTo(savedSlideIndex, 0);
      }
    }
  }, [swiper]);

  return (
    <div>
      <div className='btnqu'>
        
        <NavLink className="NavLink" to="/An-Nisa">
    <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
      <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
    <span>
    سورة النساء      
      </span>
  </NavLink>
      </div>
      <div className={style.allSwiper}>
      
        <Swiper 
          className={style.mySwiper}
          pagination={{
            type: 'fraction',
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          
          onSwiper={setSwiper} // تحديث حالة Swiper instance عند الجاهزية
          shouldSwiperUpdate // تمكين تحديث Swiper عند التغييرات
        >
          {dataquran.map((item,index)=>(
          <SwiperSlide key={index}>
            <div className={style.image}>
              <img src={item.img} alt="" />
            </div>
          </SwiperSlide>
         
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AlBaqarah;

