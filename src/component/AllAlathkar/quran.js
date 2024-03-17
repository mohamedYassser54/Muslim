import React, { useEffect, useState } from 'react';
import style from "../css/quran1.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import img1 from './image2/18.png';
import img2 from './image2/2.png'; 
import { Flipper, Flipped } from 'react-flip-toolkit';
import { Pagination } from 'swiper/modules';import 'swiper/css/effect-cards';

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

          {/* Add more SwiperSlides as needed */}

        </Swiper>
      </div>
    </div>
  );
}

export default Quran;
