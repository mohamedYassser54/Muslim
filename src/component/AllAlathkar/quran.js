import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import img1 from './quran/الجزء الاول/2.jpeg';
import img2 from './quran/الجزء الاول/3.jpeg'; 
import img3 from './quran/الجزء الاول/4.jpeg'; 
import { Flipper, Flipped } from 'react-flip-toolkit';
import { Pagination } from 'swiper/modules';import 'swiper/css/effect-cards';
import style from "../css/quran1.module.css";

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
        <Swiper 
          className={style.mySwiper}
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          onSwiper={setSwiper} // تحديث حالة Swiper instance عند الجاهزية
          shouldSwiperUpdate // تمكين تحديث Swiper عند التغييرات
        >
          <SwiperSlide>
            <div className={style.image}>
              <img src={img1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={style.image}>
              <img src={img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.image}>
              <img src={img3} alt="" />
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlides as needed */}

        </Swiper>
      </div>
    </div>
  );
}

export default Quran;
