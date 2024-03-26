import React, { useEffect, useState } from 'react';
import style from "../css/quran1.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


import dataquran  from './quran/dataquran'
import { Flipper, Flipped } from 'react-flip-toolkit';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Btn from './quran/btn/btn';
// import './Book.css';

function Quran() {
  const [swiper, setSwiper] = useState(null); // حالة لتتبع Swiper instance

  useEffect(() => {
    if (swiper) {
      // إعادة تعيين حركة الصفحة إلى الشريحة السابقة عند تغييرها
      swiper.on('slideChange', () => {
        window.localStorage.setItem('swiperSlideIndex', swiper.activeIndex);
      });

      // إعادة تعيين حركة الصفحة إلى الشريحة المحفوظة عند تحميل المكون
      const savedSlideIndex = window.localStorage.getItem('swiperSlideIndex');
      if (savedSlideIndex) {
        swiper.slideTo(savedSlideIndex, 0);
      }
    }
  }, [swiper]);

  return (
    <div>
      <div className={style.allSwiper}>
        <Btn/>
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

export default Quran;
